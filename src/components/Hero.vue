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
  /* padding: 0 2rem; */
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
