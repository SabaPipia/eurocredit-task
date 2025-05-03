<script setup>
import heroImg from "@/assets/hero_img.png";
import Button from "./ui/Button.vue";
import heroCheck from "@/assets/check_icon.png";

const BENEFITS = [
  "სპეციალურად შენ საქმიანობაზე მორგებული პირობები!",
  "სესხის მიღების სწრაფი და მარტივი პროცესი!",
  "მხოლოდ ავტომობილის უზრუნველყოფით!",
  "ნებიესმიერი საკრედიტო ისტორიით!",
];
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>სესხი თვითდასაქმებულთათვის</h1>
      <p>
        თუ ხარ თვითდასაქმებული და საქმიანობის განსავითარებლად დამატებითი
        ფინანსები გჭირდება, ჩვენ გთავაზობთ სპეციალურად შენს საჭიროებებზე
        მორგებულ სესხს, განსაკუთრებული და მოსახერხებელი პირობებით.
      </p>
      <div>
        <Button variant="primary">მოითხოვე სესხი</Button>
      </div>
      <ul class="hero-benefits-list">
        <li v-for="(benefit, index) in BENEFITS" :key="index">
          <img :src="heroCheck" alt="" />
          {{ benefit }}
        </li>
      </ul>
    </div>
    <img :src="heroImg" alt="" />
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
  font-feature-settings: "case" on;
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 54px;
  color: var(--neutral-800);
  margin-bottom: 1.6rem;
  font-family: "FiraGO";
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
</style>
