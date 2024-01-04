<script>
export default {
    name:"Footer",
    data() {
        return {
            year:null
        }
    },
    mounted() {
        var date = new Date();
        this.year = date.getFullYear();
    }
}
</script>

<template>
<div class="footer tiffany-blue-bg">
    Copyright &copy; Suraj Singok, {{ year }}. All right reserved.
</div>
</template>

<style scoped>
.footer {
    display:flex;
    justify-content:center;
    padding:.5rem 0rem;
    font-size:1.25rem;
}
</style>