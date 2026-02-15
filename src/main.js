import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router.js";
import "./style.css";

const i18n = createI18n({
    locale: "fr",
    messages: {
        fr: {
            experiences: "Expériences",
            projects: "Projets",
            about: "À propos",
            experience1: {
                duration: "2023 - Aujourd'hui",
                description: "Développement et maintenance d’un SaaS de gestion de projet en production, du back-end au front-end. Conception de la logique métier, gestion des données, intégration d’API et amélioration continue des performances, avec support client et gestion de tickets via Jira."
            },
            experience2: {
                duration: "2022 - 2023",
                description: "Réalisation d’interfaces web en Vue.js à partir de maquettes, avec intégration d’API tierces (Stripe…). Attention particulière portée à l’expérience utilisateur, à la fiabilité des échanges front/back et aux bonnes pratiques."
            },
            project1: {
                description: "Site vitrine et boutique en ligne autour de l’électronique et du prototypage. Développé en Vue.js, s’appuyant sur des requêtes GraphQL pour l’intégration de l’API Shopify, avec une mise en place du front-end et une gestion complète du responsive design."
            },
            project2: {
                description: "Plateforme NFT officielle autour du tournoi de Roland-Garros. Intégration front-end en Vue.js, avec développement d’interfaces responsives et mise en place de l’internationalisation (i18n) pour une expérience utilisateur multilingue."
            },
            project3: {
                description: "Site e-commerce pour la vente de vanille et d’épices. Conception complète du projet, incluant le maquettage, l’intégration front-end et la préparation de l’intégration du storefront Shopify."
            },
            aboutMe: "Développeur full stack avec 3 ans d’expérience, je contribue au développement d’une solution SaaS de gestion de projets. J’interviens principalement en C#, CSHTML, JavaScript (jQuery) et SQL, sur l’implémentation de nouvelles fonctionnalités, la résolution de bugs et le suivi des tickets clients via JIRA. Je participe également à la refonte de rapports HTML, en modernisant le front-end et en faisant évoluer le back-end, avec un focus sur la performance et la maintenabilité du code.",
            designedWith: "Désigné avec",
            developedWith: "développé avec",
            byMe: "par mes soins"
        },
        en:{
            experiences: "Experiences",
            projects: "Projects",
            about: "About",
            experience1: {
                duration: "2023 - Present",
                description: "Development and maintenance of a production project management SaaS, from back-end to front-end. Design of business logic, data management, API integration, and continuous performance improvement, with customer support and ticket management via Jira."
            },
            experience2: {
                duration: "2022 - 2023",
                description: "Creation of web interfaces in Vue.js from mockups, with integration of third-party APIs (Stripe…). Particular attention paid to user experience, reliability of front/back exchanges, and best practices."
            },
            project1: {
                description: "Showcase site and online store around electronics and prototyping. Developed in Vue.js, relying on GraphQL queries for Shopify API integration, with front-end setup and complete responsive design management."
            },
            project2: {
                description: "Official NFT platform around the Roland-Garros tournament. Front-end integration in Vue.js, with development of responsive interfaces and implementation of internationalization (i18n) for a multilingual user experience."
            },
            project3: {
                description: "E-commerce site for the sale of vanilla and spices. Complete project design, including mockup creation, front-end integration, and preparation for Shopify storefront integration."
            },
            aboutMe: "Full stack developer with 3 years of experience, contributing to the development of a project management SaaS solution. I mainly work in C#, CSHTML, JavaScript (jQuery), and SQL, on the implementation of new features, bug fixing, and customer ticket tracking via JIRA. I also participate in the redesign of HTML reports, modernizing the front-end and evolving the back-end, with a focus on performance and code maintainability.",
            designedWith: "Designed with",
            developedWith: "Developed with",
            byMe: "by me"
        }
    }

})

const app = createApp(App);
app.use(i18n);
app.use(router);

app.mount("#app");