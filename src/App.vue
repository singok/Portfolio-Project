<script>
import Navigation from './components/layouts/Navigation.vue'
import Footer from './components/layouts/Footer.vue';
import Main from './components/layouts/Main.vue';

export default {
    components: {
        Navigation,
        Footer,
        Main
    }
}
</script>

<template>
<Navigation />
<Main />
<Footer />
</template>

<style scoped>
</style>
