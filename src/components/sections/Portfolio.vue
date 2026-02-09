<template>
  <div class="portfolio-container">
    <h1>Some of my work</h1>
    <div class="card">
      <img :src="mockupFoxLab" alt="Mockup Fox Lab" />
      <a href="https://foxlabs.fr" target="_blank" rel="noopener noreferrer">
        <div class="card__content">
          <div class="card__content-title">
            <h3>Fox Lab</h3>
            <img class="icon" :src="arrowTopRight" alt="Arrow top right" />
          </div>
          <p>Site vitrine et boutique en ligne autour de l’électronique et du prototypage.
            Développé en Vue.js, s’appuyant sur des requêtes GraphQL pour l’intégration de l’API Shopify, avec une mise
            en
            place
            du front-end et une gestion complète du responsive design.</p>
        </div>
      </a>
    </div>
    <div class="card">
      <img :src="mockupRG" alt="Mockup RG" />
      <div class="card__content">
        <div class="card__content-title">
          <h3>Roland-Garros NFT</h3>
        </div>
        <p>Plateforme NFT officielle autour du tournoi de Roland-Garros.
          Intégration front-end en Vue.js, avec développement d’interfaces responsives et mise en place de
          l’internationalisation (i18n) pour une expérience utilisateur multilingue.</p>
      </div>
    </div>
    <div class="card">
      <img :src="mockupVanilleVolute" alt="Mockup Vanille Volute" />
      <div class="card__content">
        <div class="card__content-title">
          <h3>Vanille Volute</h3>
        </div>
        <p>Site e-commerce pour la vente de vanille et d’épices.
          Conception complète du projet, incluant le maquettage, l’intégration front-end et la préparation de
          l’intégration du storefront Shopify.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import mockupFoxLab from '../../assets/images/foxlabs.webp';
import mockupRG from '../../assets/images/roland-garros.webp';
import mockupVanilleVolute from '../../assets/images/vanille-volute.webp';
import arrowTopRight from '../../assets/images/up-right-arrow.svg';
</script>
<style lang="less">
a {
  text-decoration: none;
}

.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  gap: 20px;

  .card {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    transition: transform 0.3s ease;
    filter: grayscale(100%);

    &__content {
      margin-left: 10px;
      font-size: 0.8rem;
      width: 50%;

      h3 {
        color: var(--electric-blue);
      }

      p {
        color: #fff;
      }
    }
    &__content-title {
      display: flex;
      align-items: center;
      gap: 5px;
      .icon {
        width: 16px;
        height: 16px;
      }
    }


    &:hover {
      filter: grayscale(0%);
      transform: scale(1.05);
    }

    img {
      width: 250px;
      height: auto;
      object-fit: cover;
      border-radius: 18px;
      transition: filter 0.3s ease;
    }

  }
}

@media (min-width: 1260px) {
  .portfolio-container {
    grid-template-columns: repeat(4, 300px);
    justify-content: center;
  }
}

/* Sinon 2 × 2 */
@media (max-width: 1259px) {
  .portfolio-container {
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
  }
}
</style>