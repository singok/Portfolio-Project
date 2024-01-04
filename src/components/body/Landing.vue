<script>
export default {
    name:"Landing"
}
</script>

<template>
<div class="landing-wrapper">
    <div class="landing-desc">
        <div class="desc-label">
            <label>I am</label><label class="desig">Web Developer</label>
        </div>
    </div>
    <div class="landing-img">
        
    </div>
</div>
</template>

<style scoped>
.landing-wrapper {
    background-image: url('../../assets/images/landing-img.jpg');
    width: 100%;
    height: 100vh;
    display: flex;
}
.landing-desc {
    position: relative;
    width: 50%;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
}
.desc-label {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -100%);
}
.desig {
    font-size:4rem;
    font-weight:bold;
}
.landing-img {
    width: 50%;
}
</style>