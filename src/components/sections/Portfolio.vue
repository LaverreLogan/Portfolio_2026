<template>
  <div id="projects" class="portfolio-container">
    <h1>Some of my work</h1>
    <div class="cards-container">
      <div class="card-wrapper">
        <div class="card">
          <a class="card__link card__background" href="https://foxlabs.fr" target="_blank" rel="noopener noreferrer">
            <div class="img-container">
              <img :src="mockupFoxLab" alt="Mockup Fox Lab" />
            </div>
            <div class="card__content">
              <div class="card__content-title">
                <h3>Fox Lab</h3>
                <img class="icon" :src="arrowTopRight" alt="Arrow top right" />
              </div>
              <p>{{ t('project1.description') }}</p>
                <div class="bullets-container">
                  <div class="bullet">Vue.js</div>
                  <div class="bullet">GraphQL</div>
                  <div class="bullet">Html / Css</div>
                </div>
            </div>
          </a>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card card__background">
          <div class="card__content">
            <div class="card__content-title">
              <h3>Roland-Garros NFT</h3>
            </div>
            <p>{{ t('project2.description') }}</p>
              <div class="bullets-container">
                <div class="bullet">Vue.js</div>
                <div class="bullet">i18n</div>
                <div class="bullet">Html / Css</div>
              </div>
          </div>
          <div class="img-container">
            <img :src="mockupRG" alt="Mockup Roland-Garros NFT" />
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card card__background">
          <div class="img-container">
            <img :src="mockupVanilleVolute" alt="Mockup Vanille Volute" />
          </div>
          <div class="card__content">
            <div class="card__content-title">
              <h3>Vanille Volute</h3>
            </div>
            <p>{{ t('project3.description') }}</p>
              <div class="bullets-container">
                <div class="bullet">Vue.js</div>
                <div class="bullet">Figma</div>
                <div class="bullet">Html / Css</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import mockupFoxLab from '../../assets/images/foxlabs.webp';
import mockupRG from '../../assets/images/roland-garros.webp';
import mockupVanilleVolute from '../../assets/images/vanille-volute2.webp';
import arrowTopRight from '../../assets/images/up-right-arrow.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
let observer;

onMounted(() => {
  const cards = Array.from(document.querySelectorAll('.cards-container .card-wrapper'));

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  cards.forEach((card) => observer.observe(card));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style lang="less">
a {
  text-decoration: none;
}

.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  max-width: 1400px;
  padding: 20px;

  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;

    .card-wrapper {
      width: 100%;

      &:nth-child(even) .card {
        transform: translateX(110vw);

        .img-container {
          justify-content: flex-end;
        }
      }
    }

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 20px;
      max-width: 1200px;
      opacity: 0;
      transform: translateX(-110vw);
      transition: opacity 0.6s ease, transform 0.6s ease;
      will-change: opacity, transform;
      filter: grayscale(100%);
      gap: 20px;
      padding: 20px;

      &__background:hover {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(2px);

        .img-container {
          img {
            outline: 2px solid var(--electric-blue);
          }
        }

        .icon {
          transform: translate(2px, -2px);
        }
      }

      &__link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        gap: 20px;
      }

      &__content {
        font-size: 0.8rem;
        width: 65%;

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
          transition: transform 0.3s ease;
        }
      }

      &:hover {
        filter: grayscale(0%);
        transform: translateY(-8px) scale(1.02);

      }

      .bullets-container {
        display: flex;
        gap: 5px;
        margin-top: 5px;
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

      .img-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 35%;

        img {
          width: 250px;
          height: auto;
          object-fit: cover;
          border-radius: 18px;
          transition: filter 0.3s ease;
        }
      }

    }

    .card-wrapper.is-visible .card {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>