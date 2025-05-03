<script setup>
import logo from "@/assets/eurocredit_logo.png";
import languageIcon from "@/assets/geo_flag.jpg";
import Button from "./ui/Button.vue";
import HeaderMenu from "./HeaderMenu.vue";
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="header-left">
        <img alt="Vue logo" class="logo" :src="logo" />
        <div class="header-devider"></div>
        <div class="header-phone-wrapper">
          <i class="pi pi-phone"></i>
          <span class="header-phone"> +995 555 62 44 21 </span>
        </div>
      </div>
      <div class="header-right">
        <div class="header-language">
          <span>ქარ</span>
          <img :src="languageIcon" alt="geo_flag" />
        </div>
        <div class="header-CTA-wrapper">
          <Button variant="icon" class="header-user-btn">
            <i class="pi pi-user header-pi-user"></i>
          </Button>
          <Button size="small" variant="primary">სესხის მოთხოვნა</Button>
        </div>
      </div>
    </div>
    <HeaderMenu />
  </header>
</template>

<style scoped>
.header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 112px;
  max-width: 1440px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-devider {
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  width: 0.1rem;
  height: 4.8rem;
  background-color: var(--neutral-200);
}

.header-phone {
  font-family: "FiraGO";
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  color: var(--neutral-700);
  margin-left: 0.3rem;
}

.header-phone-wrapper {
  display: flex;
}

.header-phone-wrapper i {
  font-size: 1.8rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 3.2rem;
}

.header-language {
  display: flex;
  gap: 0.6rem;
}

.header-language span {
  color: var(--neutral-700);
  font-size: 1.4rem;
  line-height: normal;
}

.header-user-btn {
  border: 1px solid #e2e4e9;
}

.header-pi-user {
  font-size: 1.8rem;
  padding: 0.6rem;
}

.header-CTA-wrapper {
  display: flex;
  gap: 0.8rem;
}
</style>
