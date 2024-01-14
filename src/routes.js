import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/layouts/Main.vue";
import Login from "./components/dashboard/Login.vue";
import AdminLayout from "./components/layouts/admin/AdminLayout.vue";
import AdminProject from "./components/dashboard/AdminProject.vue";
import AdminSkill from "./components/dashboard/AdminSkill.vue";
import Setting from "./components/dashboard/Setting.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";

const routes = [{
        name:'Home',
        path:'/',
        component:Main
    }, {
        name:'Login',
        path:'/login',
        component:Login
    }, {
        name:'AdminLayout',
        path:'/admin',
        component:AdminLayout,
        children: [
            {
                name:'Dashboard',
                path:'/admin/dashboard',
                component:Dashboard
            }, {
                name:'AdminSkill',
                path:'/admin/skill',
                component:AdminSkill
            }, {
                name:'AdminProject',
                path:'/admin/project',
                component:AdminProject
            }, {
                name:'Setting',
                path:'/admin/setting',
                component:Setting
            }
        ]
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;