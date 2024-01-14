<script>
export default {
    name:"Skill"
}
</script>

<template>
    <div class="skill" v-motion-slide-visible-bottom>
        <div class="skill-icon">
            <font-awesome-icon :icon="['fab', 'laravel']" />
        </div>
        <div class="skill-heading mint">
            Lorem
        </div>
        <div class="skill-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae consequuntur rem dicta, ut deserunt corporis delectus, mollitia sapiente nisi laboriosam doloremque optio. Est, sit cum a adipisci vero minus ipsa!
        </div>
    </div>
</template>

<style scoped>
.skill {
    width: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
}
.skill-heading {
    font-size: 2rem;
    font-weight: bold;
}
.skill-body {
    line-height: 1.5rem;
}
</style>