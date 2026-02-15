<template>
    <div id="about" class="about">
        <div class="about-me">
            <h1>{{ t('about') }}</h1>
            <p>{{ t('aboutMe') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
  
</script>

<style lang="less" scoped>
.about {
    margin: 20px auto;
    .about-me {
        max-width: 1400px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(2px);
        padding: 20px;
        border-radius: 10px;
        align-self: center;

        p {
            color: #eee;
        }
    }

    .skills-container {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .skill {
            .content {
                margin-bottom: 10px;
            }
        }
    }

    .date {
        font-style: italic;
        font-weight: bold;
        opacity: 0.9;
    }


}
</style>