<template>
    <div class="container pt-4 mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th class="d-none d-md-table-cell">Description</th>
                                <th>Manage Instances</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#">bulk</a></td>
                                <td class="d-none d-md-table-cell">Executes child workflows in bulk but gracefully without effecting non-bulk tasks.</td>
                                <td>
                                    <a id="bla" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">creditDecision</a></td>
                                <td class="d-none d-md-table-cell"></td>
                                <td>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">nFlowMainetance</a></td>
                                <td class="d-none d-md-table-cell">Clean up workflow instances periodically.</td>
                                <td>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">processCreditApplication</a></td>
                                <td class="d-none d-md-table-cell">Makes credit decision, creates loan, deposits the money and updates credit application</td>
                                <td>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">withdrawLoan</a></td>
                                <td class="d-none d-md-table-cell">Creates loan, deposits the money and updates credit application</td>
                                <td>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'workflow-definitions',
}
</script>