<script setup>
import heroImg from "@/assets/hero_img.png";
import Button from "./ui/Button.vue";
import heroCheck from "@/assets/check_icon.png";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const BENEFITS = computed(() => [
  t("hero.benefits.1"),
  t("hero.benefits.2"),
  t("hero.benefits.3"),
  t("hero.benefits.4"),
]);
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>{{ t("hero.heading") }}</h1>
      <p>
        {{ t("hero.subheading") }}
      </p>
      <div>
        <Button variant="primary">{{ t("hero.button") }}</Button>
      </div>
      <ul class="hero-benefits-list">
        <li v-for="(benefit, index) in BENEFITS" :key="index">
          <img :src="heroCheck" alt="" />
          {{ benefit }}
        </li>
      </ul>
    </div>
    <img class="hero-img" :src="heroImg" alt="" />
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  gap: 5%;
  max-width: 1200px;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content h1 {
  font-size: 4.2rem;
  line-height: 54px;
}

.hero-content p {
  font-family: "ABeeZee";
  color: var(--neutral-700);
  font-size: 1.8rem;
  line-height: 2.9rem;
  margin-bottom: 2.4rem;
  font-weight: 400;
  font-style: normal;
}

.hero-benefits-list {
  margin-top: 4.3rem;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.hero-benefits-list li {
  font-family: "ABeeZee";
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray-600);
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

@media (max-width: 1250px) {
  .hero {
    margin: 4rem 10rem;
    flex-direction: column;
  }

  .hero-img {
    width: 50%;
    margin: 2rem auto;
  }
}

@media (max-width: 1024px) {
  .hero-img {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .hero {
    margin: 4rem 5rem;
    flex-direction: column;
  }

  .hero-img {
    width: 100%;
  }

  .hero-content h1 {
    font-size: 3.6rem;
    line-height: 48px;
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .hero {
    margin: 2rem 2rem;
  }

  .hero-content h1 {
    font-size: 1.8rem;
    line-height: 24px;
  }
}
</style>
