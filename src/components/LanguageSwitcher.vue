<script setup>
import { useI18n } from "vue-i18n";
import geoFlag from "@/assets/geo_flag.jpg";
import enFlag from "@/assets/united-kingdom_flag.png";

const { locale, t } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "ka" : "en";
};
</script>

<template>
  <div class="language-switcher" @click="toggleLanguage">
    <span>{{ t("header.language") }}</span>
    <img :src="locale === 'ka' ? geoFlag : enFlag" alt="language_flag" />
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.6rem;
  cursor: pointer;
  align-items: center;
}

.language-switcher span {
  color: var(--neutral-700);
  font-size: 1.4rem;
  line-height: normal;
  font-family: "FiraGO";
}

.language-switcher img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
