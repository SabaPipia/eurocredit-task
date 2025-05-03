<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowRightShort } from "oh-vue-icons/icons";
import SiteHeader from "./components/Header.vue";
import Button from "./components/ui/Button.vue";
import Hero from "./components/Hero.vue";

addIcons(BiArrowRightShort);
</script>

<template>
  <div class="promo-banner">
    <span>
      საზაფხულო კამპანია დაიწყო! აიღე სესხი 3 თვით 0%, წინასწარი შენატანის
      გარეშე!
    </span>
    <Button variant="icon">
      <i class="pi pi-arrow-right" style="color: white"></i>
    </Button>
  </div>
  <SiteHeader />

  <main>
    <Hero />
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
.promo-banner {
  font-family: "FiraGo";
  background-color: var(--brand-dark-blue);
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 11.2rem;
  padding-right: 11.2rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--neutral-0);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
