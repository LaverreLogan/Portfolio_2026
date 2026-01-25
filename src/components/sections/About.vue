<template>
    <div class="about">
        <div class="skills-container">
            <div class="skill">
                <div class="title-container">
                    <h2 class="title">IQar</h2>
                    <span class="date">2023 - Aujourd'hui</span>
                </div>
                <div class="content">
                    <ul>
                        <li>Développement de fonctionnalités back-end: conception de modèles, services et logique métier
                        </li>
                        <li>Interaction avec la base de données et structuration des données applicatives</li>
                        <li>Développement front-end et intégration avec les API back-end</li>
                        <li>Support applicatif et amélioration continue sur une application métier utilisée en
                            production (analyse d'incidents, correction de bugs, optimisation des performances)</li>
                    </ul>
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
                    <ul>
                        <li>Développement d'interfaces font-end en Vue.js à partir de maquettes</li>
                        <li>Intégration d'API tierces (Stripe, etc.) et connexion avec le back-end</li>
                        <li>Mise en place de fonctionnalités orientées UX et fiabilité des échanges front / back</li>
                        <li>Veille technologique et échanges techniques au sein de l'équipe</li>
                    </ul>
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
                gestion de projets. J’interviens principalement en C#, CSHTML, JavaScript (jQuery) et SQL, sur
                l’implémentation de nouvelles fonctionnalités, la résolution de bugs et le suivi des tickets clients via
                JIRA. Je participe également à la refonte de rapports HTML, en modernisant le front-end et en faisant
                évoluer le back-end, avec un focus sur la performance et la maintenabilité du code.</p>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    gap: 20px;


    p,
    li,
    span {
        color: #eee;
    }

    .date {
        font-style: italic;
        font-weight: bold;
    }

    .bullets-container {
        display: flex;
        gap: 5px;
        .bullet {
            display: flex;
            justify-content: center;
            align-items: center;
            background:#083733;
            color: #5eead5;
            padding: 5px 15px;
            border-radius: 25px;
        }
    }

    ul li::marker {
        color: #5eead5;
    }
}
</style>