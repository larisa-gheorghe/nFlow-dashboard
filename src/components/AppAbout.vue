<template>
    <div class="container m-4">
        <div class="row">
            <div class="col-ms-12">
                <h1>nFlow Dashboard</h1>
                <p>See <a :href="nflowLink" class="text-decoration-none">nflow.io</a> for more details about nFlow.
                <br>
                For support, please send a message to <a :href="nflowMailingList" class="text-decoration-none">nFlow mailing list</a>.
                <br>
                nFlow development happens in <a :href="nflowGithub" class="text-decoration-none">GitHub</a>.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-about',
    data() {
        return {
            nflowLink: 'https://nflow.io/',
            nflowMailingList: 'https://groups.google.com/g/nflow-users',
            nflowGithub: 'https://github.com/NitorCreations/nflow'
        }
    }
}
</script>