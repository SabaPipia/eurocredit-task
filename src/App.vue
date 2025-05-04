<script setup>
import { useI18n } from "vue-i18n";
import SiteHeader from "./components/Header.vue";
import Button from "./components/ui/Button.vue";
import Hero from "./components/Hero.vue";
import Loan from "./components/Loan.vue";

const { t } = useI18n();
</script>

<template>
  <div class="promo-banner">
    <span>
      {{ t("promo") }}
    </span>
    <Button variant="icon">
      <i class="pi pi-arrow-right" style="color: white"></i>
    </Button>
  </div>
  <SiteHeader />

  <main>
    <Hero />
    <Loan />
  </main>
</template>

<style scoped>
.promo-banner {
  font-family: "FiraGo";
  background-color: var(--brand-dark-blue);
  padding: 1.2rem 0;
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
</style>
