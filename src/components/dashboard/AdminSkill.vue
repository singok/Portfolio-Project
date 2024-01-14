<script>
export default {
    name:"AdminSkill"
}
</script>

<template>
    <div class="section-header">
        <div class="heading">
            skills
        </div>
        <div class="add-button">
            <button class="add-btn">Add</button>
        </div>
    </div>
    <div class="section-content">
        <table class="table-list">
            <thead>
                <tr>
                    <th width="5%">S.No.</th>
                    <th width="20%">Name</th>
                    <th width="55%">Description</th>
                    <th width="10%">Icon</th>
                    <th width="10%">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>S.No.</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Icon</td>
                    <td>
                        <font-awesome-icon class="editIcon" :icon="['fas', 'pen-to-square']" /> | <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                    </td>
                </tr>
                <tr>
                    <td>S.No.</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Icon</td>
                    <td>
                        <font-awesome-icon class="editIcon" :icon="['fas', 'pen-to-square']" /> | <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                    </td>
                </tr>
                <tr>
                    <td>S.No.</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Icon</td>
                    <td>
                        <font-awesome-icon class="editIcon" :icon="['fas', 'pen-to-square']" /> | <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.section-header {
    font-size:1.3rem;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px 0px;
}
.heading {
    font-weight: bold;
    text-transform: uppercase;
    align-self: center;
}
.add-btn {
    font-size:1rem;
    padding:.5rem 2rem;
    border: none;
    color: #fffbfa;
    background-color: #00bd9d;
}
.add-btn:hover {
    cursor: pointer;
}
.section-content {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px 0px;
    font-size:1rem;
    padding: 1rem 1rem;
}
.table-list {
    width: 100%;
    border: none;
}
td, th {
  padding: 0;
}
.table-list tbody tr td {
    padding: .5rem .5rem;
    background-color: rgb(243, 240, 240);
}
.table-list thead {
    background-color: #00bd9d;
    color: #fffbfa;
}
.table-list thead tr th {
    padding: .5rem .5rem;
}
.editIcon {
    color:#00bd9d;
}
.deleteIcon {
    color:red;
}
</style>