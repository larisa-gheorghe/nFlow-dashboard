Steps to deploy on github-packages

1. create a scripts folder.
2. create a `gh-pages-deploy.js` script
3. copy following:
```js
/* eslint-disable no-console */
const execa = require('execa');
const fs = require('fs');

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages']);
    // eslint-disable-next-line no-console
    console.log('Building started...');
    await execa('npm', ['run', 'build']);
    // await execa('yarn', ['build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', 'main']);
    await execa('git', ['branch', '-D', 'gh-pages']);
    console.log('Successfully deployed, check your settings');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();

```
4. in prj-root/.github/ create a `workflows` folder
5. in prj-root/.github/workflows, create a `deploy-vue.yml`
6. copy following:
```yml
# This workflow will do a clean install of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on: 
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "12"
      - name: Install packages
        run: npm i
      - name: Set Creds
        run: git config user.name "Deploy Bot" && git config user.email "larisa.camelia.gheorghe@gmail.com"
      - name: Deploy
        run: npm run deploy
```
7. edit`package.json` and add to `scripts`: `"deploy": "node scripts/gh-pages-deploy.js"`
8. add to `vue.config.js` -> `publicPath: '/nFlow-dashboard/'` (check previous projects for more info)
9. push all these to github
10. the Actions will execute, you should see a new branch called `gh-pages`
11. on github, for that repo, go to Settings > Pages > select Source = Deploy from branch and select `gh-pages` `/root`
12. a new pipeline will run, after with go back to Settings > Pages and you will see the link to your site.