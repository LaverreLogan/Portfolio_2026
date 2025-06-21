<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from './components/sections/Home.vue'

export default {
    name: "App",
    components: {
        Home
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
    color: #333;
}

#app {
    overflow-x: hidden;
}

html {
    scroll-behavior: smooth;
}

button {
    font-family: inherit;
}

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
}
</style>