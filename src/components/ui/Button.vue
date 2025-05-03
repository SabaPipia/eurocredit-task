<template>
  <button
    class="button"
    :class="[variant, variant === 'icon' ? '' : size]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "large",
  },
  type: {
    type: String,
    default: "button",
  },
});
</script>

<style scoped>
.button {
  font-family: "FiraGO";
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.primary {
  background-color: var(--brand-dark-blue);
  border-radius: 5rem;
  color: white;
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

.large {
  font-weight: 500;
  padding: 1.8rem 2.6rem;
}

.small {
  font-weight: 400;
  padding: 1.4rem 1.8rem;
}
</style>
