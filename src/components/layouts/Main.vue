<script>
import Landing from '../body/Landing.vue';
import Card from '../body/Card.vue';
import Heading from '../body/Heading.vue';
import Skill from '../body/Skill.vue';
import About from '../body/About.vue';
import Contact from '../body/Contact.vue';
export default {
    name:"Main",
    components: {
        Landing,
        Card,
        Heading,
        Skill,
        About,
        Contact
    }
}
</script>

<template>
    <Landing />
    <div class="about-container bg-color">
        <div class="layout-wrapper">
            <div class="about-heading">
                <Heading name="About Me" />
            </div>
            <div class="wrapper">
                <About />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="layout-wrapper">
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
        <div class="layout-wrapper">
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
    <div class="container">
        <div class="layout-wrapper">
            <div class="contact-heading">
                <Heading name="Contact" />
            </div>
            <div class="contact-wrapper">
                <Contact />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0 10%;
    min-height: 90vh;
}
.about-container {
    padding: 0 15%;
    min-height: 45vh;
}
.layout-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding:5rem 0;
    height: 100%;
}
.contact-wrapper {
    display: flex;
    flex-direction: row;
    padding: 2.5rem 0;
    font-size: 1.5rem;
}
.wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:2rem;
    padding: 2.5rem 0;
}
</style>