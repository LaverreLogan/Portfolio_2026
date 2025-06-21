<template>
    <div class="home">
        <p class="home-text">{{ displayText }}<span class="cursor">|</span></p>
        <img src="/src/assets/images/Illu_1 1.png" alt="Logan" class="logan-image">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = "Hi, I'm Logan, full stack developer"
const displayText = ref('')

const typeWriter = () => {
    let i = 0
    const typeSpeed = 100
    
    const type = () => {
        if (i < fullText.length) {
            displayText.value += fullText.charAt(i)
            i++
            setTimeout(type, typeSpeed)
        }
    }
    
    type()
}

onMounted(() => {
    setTimeout(typeWriter, 500)
})
</script>

<style scoped>
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #042326, #256C74);
}

.home-text {
    font-size: 2rem;
    color: #fff;
    font-weight: 600;
    margin-right: 20px;
}

.cursor {
    animation: blink 1s infinite;
    color: #60B450;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
</style>