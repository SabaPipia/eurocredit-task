<template>
  <nav class="header-nav">
    <div>
      <ul class="header-nav-list">
        <a href="#" v-for="(item, index) in navItems" :key="index">
          <li>{{ item.name }}</li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  {
    name: "ავტო სესხი",
    href: "#",
  },
  {
    name: "ბიზნეს სესხი",
    href: "#",
  },
  {
    name: "თვითდასაქმებულთათვის",
    href: "#",
  },
  {
    name: "ჩვენ შესახებ",
    href: "#",
  },
  {
    name: "ბლოგი",
    href: "#",
  },
  {
    name: "კონტაქტი",
    href: "#",
  },
];
</script>

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
  gap: 4.8rem;
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
}
</style>
