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
                                <td><a href="#" class="icons text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details">bulk</a></td>
                                <td class="d-none d-md-table-cell">Executes child workflows in bulk but gracefully without effecting non-bulk tasks.</td>
                                <td>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#" class="icons text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details">creditDecision</a></td>
                                <td class="d-none d-md-table-cell"></td>
                                <td>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#" class="icons text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details">nFlowMainetance</a></td>
                                <td class="d-none d-md-table-cell">Clean up workflow instances periodically.</td>
                                <td>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#" class="icons text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details">processCreditApplication</a></td>
                                <td class="d-none d-md-table-cell">Makes credit decision, creates loan, deposits the money and updates credit application</td>
                                <td>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#" class="icons text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details">withdrawLoan</a></td>
                                <td class="d-none d-md-table-cell">Creates loan, deposits the money and updates credit application</td>
                                <td>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-plus" /></a>
                                    <a class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" href="#"><font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass" /></a>
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
    mounted() {
        const signs = document.querySelectorAll('.icons')
        for (let sign of signs) {
            new bootstrap.Tooltip(sign)
        }
    }
}
</script>