<script>
export default {
    name:"AdminLayout"
}
</script>

<template>
    <div class="dashboard-container">
        <div class="left-container">
            <div class="side-header">My Portfolio</div>
            <div class="side-menu">
                <router-link to="/admin/dashboard" class="menu">
                    <font-awesome-icon :icon="['fas', 'chart-bar']" />
                    Dashboard
                </router-link>
                
                <router-link to="/admin/skill" class="menu">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    Skills
                </router-link>

                <router-link to="/admin/project" class="menu">
                    <font-awesome-icon :icon="['fas', 'person-digging']" />
                    Projects
                </router-link>
                <router-link to="/admin/setting" class="menu">
                    <font-awesome-icon :icon="['fas', 'gear']" />
                    Setting
                </router-link>
            </div>
        </div>
        <div class="right-container">
            <div class="main-header"></div>
            <div class="main-container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-container {
    display:flex;
    flex-direction:row;
}
.left-container {
    width:20%;
    background-color:#00bd9d;
    height:100vh;
    display:flex;
    flex-direction:column;
}
.right-container {
    width:80%;
    background-color:#fffbfa;
    height:100vh;
}
.side-header, .main-header {
    padding:1.5rem 1.5rem;
    text-align:center;
    font-weight:bold;
    font-size:1.4rem;
    height:3vh;
}
.side-header {
    background-color: #178d79;
    color:#fffbfa;
}
.main-header {
    background-color: #e2e7e6;
    color:black;
}
.side-menu {
    display:flex;
    flex-direction:column;
}
.menu {
    padding: 1.5rem 6rem;
    font-size:1.2rem;
    color:#fffbfa;
    display:flex;
    gap:.75rem;
    text-decoration:none;
}
.menu:hover {
    cursor:pointer;
    background-color: #178d79;
}
.main-container {
    padding:1rem 1rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
}
</style>