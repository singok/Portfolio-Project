<script>
export default {
    name:"Navigation"
}
</script>

<template>
<div class="nav mint-bg">
    <ul class="nav-item snow">
        <li>home</li>
        <li>about me</li>
        <li>skills</li>
        <li>projects</li>
        <li>contact</li>
    </ul>
</div>
</template>

<style scoped>
.nav {
    top:0;
    height:5rem;
    position:sticky;
    z-index:1000;
}
.nav-item {
    display:flex;
    gap:2rem;
    justify-content:flex-end;
    list-style-type:none;
    text-transform:uppercase;
    font-weight:bold;
    font-size:1.5rem;
    line-height:5rem;
    padding: 0rem 4rem;
}
.nav-item li {
    padding:0rem 1rem;
}

.nav-item li:hover {
    background-color:#5cbdb7;
    border-bottom: 2px solid #8bd7d2;
    cursor:pointer;
}
</style>