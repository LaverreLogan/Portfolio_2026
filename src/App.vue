<template>
    <NavBar />
    <Home />
    <Experiences />
    <About />
    <Portfolio />
</template>

<script>
import NavBar from './components/sections/NavBar.vue'
import Home from './components/sections/Home.vue'
import Experiences from './components/sections/Experiences.vue'
import About from './components/sections/About.vue'
import Portfolio from './components/sections/Portfolio.vue';
export default {
    name: "App",
    components: {
        Home,
        NavBar,
        Experiences,
        About,
        Portfolio
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #042326;
    color: #333;
}

#app {
    overflow-x: hidden;

    >div {
        width: 90%;
    }
}

html {
    scroll-behavior: smooth;
}

button {
    font-family: inherit;
}

h1,
h2 {
    color: #5eead5;
}

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
}
</style>