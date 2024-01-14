<script>
export default {
    name:"Login"
}
</script>

<template>
<div class="login-container">
    <div class="login-box">
        <div class="header-login">
            <h2 class="header-txt">admin login</h2>
            <hr>
        </div>
        <div class="body-login">
            <div class="input-field">
                <label for="email">Email : </label>
                <input type="email" id="email" name="email" class="input-text" placeholder="Enter your email..."/>
            </div>
            <div class="input-field">
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" class="input-text" placeholder="Enter your password..."/>
            </div>
            <div class="input-remember">
                <input type="checkbox" class="remember-check" name="rememberme">
                <label for="remember">Remember Me</label>
            </div>
        </div>
        <div class="footer-login">
            <button class="signin-btn">Sign in</button>
        </div>
    </div>
</div>
</template>

<style scoped>
.login-container {
    height: 100vh;
    background-color: #00bd9d;
    position: relative;
}

.login-box {
    width: 17%;
    background-color: #fffbfa;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 3rem;
}
.header-login {
    font-size: 1.2rem;
    text-align: center;
    text-transform: capitalize;
}
.header-txt {
    padding: .4rem 0;
}
.input-text {
    padding: .75rem 1rem;
    font-size: 1rem;
}
.input-field {
    display: flex;
    flex-direction: column;
    gap: .75rem;
}
.body-login {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.signin-btn {
    color: white;
    background-color: #00bd9d;
    font-size: 1.2rem;
    border: none;
    width: 100%;
    padding: .75rem;
}
.signin-btn:hover {
    cursor: pointer;
}
.input-remember {
    display: flex;
    gap:.5rem;
}
.remember-check:hover {
    cursor: pointer;
}
</style>