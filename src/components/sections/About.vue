<template>
    <div class="about">
        <div class="skills-container">
            <div class="skill">
                <div class="title-container">
                    <h2 class="title">IQar</h2>
                    <span class="date">2023 - Aujourd'hui</span>
                </div>
                <div class="content">
                    <p>Développement et maintenance d’un SaaS de gestion de projet en production, du back-end au
                        front-end.
                        Conception de la logique métier, gestion des données, intégration d’API et amélioration continue
                        des performances, avec support client et gestion de tickets via Jira.</p>
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
                    <span class="date">2022 - 2023</span>
                </div>
                <div class="content">
                    <p>Réalisation d’interfaces web en Vue.js à partir de maquettes, avec intégration d’API tierces
                        (Stripe…).
                        Attention particulière portée à l’expérience utilisateur, à la fiabilité des échanges front/back
                        et aux bonnes pratiques.</p>
                </div>
                <div class="bullets-container">
                    <div class="bullet">Vue.js</div>
                    <div class="bullet">JavaScript</div>
                    <div class="bullet">GraphQL</div>
                    <div class="bullet">Html / Css</div>
                </div>
            </div>
        </div>
        <div class="about-me">
            <h1>About me</h1>
            <p>Développeur full stack avec 3 ans d’expérience, je contribue au développement d’une solution SaaS de
                gestion de projets.
            </p>
            <p>J’interviens principalement en C#, CSHTML, JavaScript (jQuery) et SQL, sur
                l’implémentation de nouvelles fonctionnalités, la résolution de bugs et le suivi des tickets clients via
                JIRA.
            </p>
            <p>Je participe également à la refonte de rapports HTML, en modernisant le front-end et en faisant
                évoluer le back-end, avec un focus sur la performance et la maintenabilité du code.
            </p>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin: 0 auto;
    gap: 20px;


    p,
    li,
    span {
        color: #eee;
    }

    .about-me {
        align-self: center;

        p:not(:last-child){
            margin-bottom: 10px;
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
}
</style>