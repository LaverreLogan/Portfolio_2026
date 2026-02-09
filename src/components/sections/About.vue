<template>
    <div class="about">

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
    margin: 50px auto;
    gap: 20px;

    .about-me {
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