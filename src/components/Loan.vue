<template>
  <div class="slider-wrapper">
    <h1>შეავსე სესხის განაცხადი</h1>
    <p>ლორემ იპსუმ განუმეორებელი ეღრიჯებოდა დაებღერტყნათ</p>
    <div
      style="
        display: flex;
        flex-direction: column;
        max-width: 50rem;
        width: 100%;
      "
    >
      <div class="slider-wrapper__header">
        <span class="slider-wrapper__header-title"
          >რა თანხის სესხება გსურთ</span
        >
        <span class="slider-wrapper__header-max">მაქს: 24 000₾</span>
      </div>
      <Slider />
      <Button class="slider-button">სესხის აღება</Button>
    </div>
  </div>
</template>

<script setup>
import Slider from "./Slider.vue";
import Button from "./ui/Button.vue";
</script>

<style scoped>
.slider-wrapper {
  max-width: 1200px;
  margin-top: 13rem;
  margin-bottom: 13rem;
  padding: 4.8rem 11.2rem;
  background: var(--neutral-100);
  margin-left: auto;
  margin-right: auto;
  border-radius: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-wrapper h1 {
  font-size: 3.6rem;
  letter-spacing: -0.216px;
  margin-bottom: 1.6rem;
}

.slider-wrapper p {
  color: var(--neutral-500);
  text-align: center;
  font-family: ABeeZee;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  margin-bottom: 3.2rem;
}

.slider-wrapper__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.slider-wrapper__header-title {
  font-feature-settings: "ss11" on, "cv09" on, "liga" off, "calt" off;
  font-family: FiraGO;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  color: var(--neutral-700);
}

.slider-wrapper__header-max {
  color: #525866;
  text-align: right;
  font-feature-settings: "ss11" on, "cv09" on, "liga" off, "calt" off;
  font-family: ABeeZee;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.slider-button {
  margin-top: 5.3rem;
}

@media (max-width: 640px) {
  .slider-wrapper {
    padding: 2rem 2rem;
    border-radius: 0;
  }
  .slider-wrapper h1 {
    text-align: center;
  }
}
</style>
