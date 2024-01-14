<script>
export default {
    name:"Contact"
}
</script>

<template>
<div class="address-section" v-motion-slide-visible-bottom>
    <div class="name">
        Name : Suraj Singok 
    </div>
    <div class="email">
        Email : singoksuraj@gmail.com
    </div>
    <div class="address">
        Address : Chabahil, Kathmandu
    </div>
    <div class="contact">
        Contact No. : 9829353064, 9849921398
    </div>
</div>
<div class="form-section" v-motion-slide-visible-bottom>
    <div class="input-wrapper">
        <label>Name : </label><input type="text" name="name" placeholder="Full name"  class="input-text"/>
    </div>
    <div class="input-wrapper">
       <label>Email : </label><input type="text" name="email" placeholder="Email Address" class="input-text"/>
    </div>
    <div class="input-wrapper">
        <label>Comment : </label><textarea class="input-text">Comment here !</textarea>
    </div>
    <div class="input-wrapper">
        <button class="input-text contact-btn mint-bg">Contact</button>
    </div>
</div>
</template>

<style scoped>
.address-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 45vh;
}
.form-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    min-height: 45vh;
}
.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.input-text {
    padding: .75rem 1rem;
    font-size: 1.2rem;
}
textarea {
    height: 4rem;
    font-size: 1.2rem;
}
.contact-btn {
    color: white;
    font-size: 1.2rem;
    border: none;
}
.contact-btn:hover {
    cursor: pointer;
}
</style>