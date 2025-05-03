<template>
  <button class="button" :class="variant" :type="type">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
});
</script>

<style scoped>
.button {
  border: none;
  border-radius: 100%;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.primary {
  background-color: var(--brand-dark-blue);
  border-radius: 5rem;
  color: white;
  padding: 1.4rem 1.8rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.icon {
  background-color: rgba(255, 255, 255, 0.3);
  color: black;
  padding: 0.6rem;
}
</style>
