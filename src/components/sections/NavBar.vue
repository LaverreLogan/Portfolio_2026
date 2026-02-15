<template>
    <div class="navbar-container">
        <div class="navbar-logo">
            <RouterLink :to="{ path: '/', hash: '#home' }" class="navbar-link"
                :class="{ active: activeSection === 'home' }"><img src="/src/assets/images/logo.png" alt="Logo"
                    class="logo-image"></img></RouterLink>
        </div>
        <ul class="navbar-list">
            <li class="navbar-item">
                <RouterLink :to="{ path: '/', hash: '#experiences' }" class="navbar-link"
                    :class="{ active: activeSection === 'experiences' }" @click="setActive('experiences')">{{ t('experiences') }}
                </RouterLink>
            </li>
            <li class="navbar-item">
                <RouterLink :to="{ path: '/', hash: '#projects' }" class="navbar-link"
                    :class="{ active: activeSection === 'projects' }" @click="setActive('projects')">{{ t('projects') }}
                </RouterLink>
            </li>
            <li class="navbar-item">
                <RouterLink :to="{ path: '/', hash: '#about' }" class="navbar-link"
                    :class="{ active: activeSection === 'about' }" @click="setActive('about')">{{ t('about') }}</RouterLink>
            </li>

        </ul>
        <div class="navbar-actions">
            <button class="lang-toggle" type="button" @click="setLanguage('en')" :class="{ active: locale === 'en' }">
                EN
            </button>
            <span class="lang-separator">|</span>
            <button class="lang-toggle" type="button" @click="setLanguage('fr')" :class="{ active: locale === 'fr' }">
                FR
            </button>
        </div>
    </div>

</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const activeSection = ref('');
let observer;

const setActive = (sectionId) => {
    activeSection.value = sectionId;
};

const setLanguage = (lang) => {
    locale.value = lang;
};

onMounted(() => {
    const sectionIds = ['home', 'experiences', 'about', 'projects', 'contact'];
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    if (!('IntersectionObserver' in window)) {
        return;
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        {
            root: null,
            threshold: 0.3,
            rootMargin: '0px 0px -50% 0px',
        },
    );

    sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style lang="less" scoped>
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    height: 60px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(2px);
    width: 100% !important;
    padding: 0 20px;

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
                transition: color 0.2s ease, border-color 0.2s ease;
                border-bottom: 2px solid transparent;
                padding-bottom: 4px;
            }

            .navbar-link.active {
                color: var(--electric-blue);
                border-color: var(--electric-blue);
            }
        }
    }

    .navbar-actions {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .lang-toggle {
        background: transparent;
        border: 1px solid transparent;
        color: #fff;
        padding: 4px 6px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
    }

    .lang-toggle.active {
        color: var(--electric-blue);
        border-color: var(--electric-blue);
    }

    .lang-toggle:hover {
        color: var(--electric-blue);
    }

    .lang-separator {
        color: #fff;
        opacity: 0.6;
    }
}
</style>