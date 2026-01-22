<template>
    <div class="navbar-container">
        <div class="navbar-logo">
            <img src="/src/assets/images/logo.png" alt="Logo" class="logo-image">
        </div>
        <ul class="navbar-list">
            <li class="navbar-item">
                <a href="#home" class="navbar-link">Home</a>
            </li>
            <li class="navbar-item">
                <a href="#about" class="navbar-link">About</a>
            </li>
            <li class="navbar-item">
                <a href="#projects" class="navbar-link">Projects</a>
            </li>
            <li class="navbar-item">
                <a href="#contact" class="navbar-link">Contact</a>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .navbar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 1000;
        height: 60px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(2px);
        .navbar-logo {
            img {
                width: 40px;
                height: 40px;
            }
        }
        .navbar-list {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            width: 80%;
            list-style-type: none;
            .navbar-item {
                a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }
        }
    }
</style>