<script>
import DashboardCard from './DashboardCard.vue';
export default {
    name:"Dashboard",
    components: {
        DashboardCard
    }
}
</script>

<template>
    <div class="section-header">
        <div class="heading">
            dashboard
        </div>
    </div>
    <div class="section-content">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
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
.section-content {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px 0px;
    font-size:1rem;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>