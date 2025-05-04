<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();
const NAVITEMS = computed(() => [
  { name: t("header.menu.autoLoan"), href: "#" },
  { name: t("header.menu.businessLoan"), href: "#" },
  { name: t("header.menu.selfEmployedLoan"), href: "#" },
  { name: t("header.menu.aboutUs"), href: "#" },
  { name: t("header.menu.blog"), href: "#" },
  { name: t("header.menu.contact"), href: "#" },
]);
</script>

<template>
  <nav class="header-nav">
    <div>
      <ul class="header-nav-list">
        <a href="#" v-for="(item, index) in NAVITEMS" :key="index">
          <li>{{ item.name }}</li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.header-nav {
  background-color: var(--neutral-100);
  display: flex;
  padding: 1.6rem 11.2rem;
  width: 100%;
  justify-content: center;
}

.header-nav-list {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  row-gap: 1.6rem;
  column-gap: 4.8rem;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.header-nav-list a {
  text-decoration: none;
}

.header-nav-list li:hover {
  text-decoration: underline;
  color: var(--brand-dark-blue);
  font-weight: 800;
}

.header-nav-list li {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  color: var(--neutral-700);
  font-family: "FiraGO";
}

@media (max-width: 1024px) {
  .header-nav {
    padding: 1.6rem 5rem;
  }
}

@media (max-width: 640px) {
  .header-nav {
    padding: 1.6rem 2rem;
  }
}
</style>
