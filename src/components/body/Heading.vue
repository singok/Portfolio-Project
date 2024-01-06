<script>
export default {
    name:"Heading",
    props:{
        name:String
    },
    data() {
        return {
            headName:this.name
        }
    }
}
</script>

<template>
<h1 class="heading">{{ headName }}</h1>
</template>

<style scoped>
.heading {
    text-align: center;
    color:black;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: underline;
}
</style>