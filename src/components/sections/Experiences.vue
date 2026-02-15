<template>
    <div id="experiences" class="skills-container">
        <div class="skill">
            <div class="title-container">
                <h2 class="title">IQar</h2>
                <span class="date">{{ t('experience1.duration') }}</span>
            </div>
            <div class="content">
                <p>{{ t('experience1.description') }}</p>
            </div>
            <div class="bullets-container">
                <div class="bullet">C#</div>
                <div class="bullet">SQL</div>
                <div class="bullet">JavaScript</div>
                <div class="bullet">Chtml / Less</div>
                <div class="bullet">React</div>
            </div>
        </div>
        <div class="skill">
            <div class="title-container">
                <h2 class="title">Freelance</h2>
                <span class="date">{{ t('experience2.duration') }}</span>
            </div>
            <div class="content">
                <p>{{ t('experience2.description') }}</p>
            </div>
            <div class="bullets-container">
                <div class="bullet">Vue.js</div>
                <div class="bullet">JavaScript</div>
                <div class="bullet">GraphQL</div>
                <div class="bullet">Html / Css</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<style lang="less" scoped>
.skills-container {
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
    gap: 50px;
    color: #fff;
    max-width: 1400px;

    .skill {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(2px);
        padding: 20px;
        border-radius: 10px;
        width: 50%;
        gap: 20px;
        .content {
            margin-bottom: 10px;
        }
    }
}

.bullets-container {
    display: flex;
    gap: 5px;

    .bullet {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #083733;
        color: #5eead5;
        padding: 5px 15px;
        border-radius: 25px;
    }
}

@media screen and (max-width: 1200px) {
    .skills-container {
        flex-direction: column;
        align-items: center;

        .skill {
            width: 100%;
        }
    }
}
</style>