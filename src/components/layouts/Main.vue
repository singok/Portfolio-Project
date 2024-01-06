<script>
import Landing from '../body/Landing.vue';
import Card from '../body/Card.vue';
import Heading from '../body/Heading.vue';
import Skill from '../body/Skill.vue';
export default {
    name:"Main",
    components: {
        Landing,
        Card,
        Heading,
        Skill
    }
}
</script>

<template>
    <Landing />
    <div class="container">
        <div class="skill-layout">
            <div class="skill-heading">
                <Heading name="Skills" />
            </div>
            <div class="wrapper skill-wrap">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    </div>
    <div class="container bg-color">
        <div class="card-layout">
            <div class="card-heading">
                <Heading name="Projects" />
            </div>
            <div class="wrapper">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0 10%;
    min-height: 100vh;
}
.card-layout, .skill-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding:5rem 0;
}
.wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:2rem;
    padding: 2.5rem 0;
}
</style>