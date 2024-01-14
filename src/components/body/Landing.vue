<script>
export default {
    name:"Landing"
}
</script>

<template>
<div class="landing-wrapper">
    <div class="landing-desc"
    v-motion 
    :initial="{
        x: 100,
        opacity: 0
      }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 300,
          type: 'sprint',
          ease: 'easeIn',
        }
    }">
        <div class="desc-label">
            <label>I am</label><label class="design">Web Developer</label>
        </div>
    </div>
    <div class="landing-img">
        <div class="image-profile">
            <img src="../../assets/images/profile.png" />
        </div>
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
.design {
    font-size:4rem;
    font-weight:bold;
}
.landing-img {
    width: 50%;
    position: relative;
}
.image-profile {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>