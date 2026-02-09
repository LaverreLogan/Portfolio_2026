<template>
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
</template>
<script setup>
</script>
<style lang="less" scoped>
.skills-container {
    display: flex;
    justify-content: space-around;
    margin: 50px auto;
    gap: 30px;
    color: #fff;

    .skill {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(2px);
        padding: 20px;
        border-radius: 10px;
        width: 40%;
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
</style>