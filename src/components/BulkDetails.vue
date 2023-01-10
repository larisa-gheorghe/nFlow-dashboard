<template>
    <div class="container m-4">
        <div class="row m-2">
            <h3>bulk 
                    <a
                        class="icons"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance"
                        href="#">
                        <font-awesome-icon class="m-2" icon="fa-solid fa-plus"/>
                    </a>
                    <a
                        class="icons"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"
                        href="#">
                        <font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass"/>
                    </a>
                </h3>
        </div>
        <div class="row m-2">
            <div class="col-6 text-left">
                <p m-2>Executes child workflows in bulk but gracefully without effecting non-bulk tasks.</p>
                <p>GRAFIC</p>
            </div>
            <div class="col-6">
                <h5>Instance Statistics</h5>
                <table class="table table-sm table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Created</th>
                            <th>In Progress</th>
                            <th>Executing</th>
                            <th>Manual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>splitWork</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>waitForChildrenToFinish</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>done</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>created</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>inProgress</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>executing</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>manual</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>finished</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td colspan="4"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row m-2">
            <div class="col-6"></div>
            <div class="col-6">
                <h5>Settings</h5>
                <table class="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>Setting</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>transitionDelaysInMilliseconds</td>
                            <td>{
                                "immediate": 0,
                                "waitShort": 30000,
                                "minErrorWait": 60000,
                                "maxErrorWait": 86400000
                                }</td>
                        </tr>
                        <tr>
                            <td>maxRetries</td>
                            <td>2147483647</td>
                        </tr>
                        <tr>
                            <td>defaultPriority</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bulk-details'
}
</script>