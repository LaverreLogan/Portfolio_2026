import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./App.vue")
    },
    {
        path: "/Home",
        name: "Home",
        component: () => import("./components/sections/Home.vue")
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;