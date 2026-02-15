<template>
    <div id="contact" class="footer">
        <p>{{ t('designedWith') }} <strong>Figma</strong>, {{ t('developedWith') }} <strong>Vue.js</strong> {{ t('byMe') }}</p>
        <div class="icons-container">
            <a href="https://www.linkedin.com/in/laverre-logan/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LaverreLogan" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<style lang="less" scoped>
.footer {
    margin: 50px auto;
    text-align: center;
    color: #eee;

    .icons-container {
        margin-top: 10px;

        a {
            color: #eee;
            margin: 0 10px;
            font-size: 1.5em;
            transition: color 0.3s;

            &:hover {
                color: #5eead5;
            }
        }
    }
}
</style>