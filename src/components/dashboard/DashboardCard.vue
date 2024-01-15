<script>
export default {
    name:"DashboardCard"
}
</script>

<template>
<div class="card">
    <div class="icon">
        <font-awesome-icon :icon="['fab', 'laravel']" />
    </div>
    <div class="icon-body">
        <div class="icon-head">
            Lorem
        </div>
        <div class="icon-desc">
            Count : 10
        </div>
    </div>
</div>
</template>

<style scoped>
.icon {
    font-size: 6rem;
    color: #00bd9d;
}
.icon-head {
    font-weight: bold;
    font-size: 1.8rem;
    color: #00bd9d;
}
.card {
    padding:1rem;
    display: flex;
    flex-direction: row;
    width: 22%;
    gap:5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px 0px;
    border-radius: 5%;
}
.icon-body {
    padding: .75rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.icon-desc {
    font-size: 1.3rem;
}
</style>