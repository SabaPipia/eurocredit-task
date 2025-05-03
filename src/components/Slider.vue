<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const value = ref(50);
const min = ref(1000);
const max = ref(24000);
const isDragging = ref(false);
const sliderRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);

const formatValue = (val: number) => {
  return `${val.toLocaleString()}₾`;
};

const calculateValue = (percentage: number) => {
  return Math.round(min.value + percentage * (max.value - min.value));
};

const displayValue = ref(formatValue(calculateValue(value.value / 100)));

const updateValue = (event: MouseEvent | TouchEvent) => {
  if (!sliderRef.value) return;

  const rect = sliderRef.value.getBoundingClientRect();
  const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
  let percentage = (clientX - rect.left) / rect.width;
  percentage = Math.max(0, Math.min(1, percentage));

  value.value = Math.round(percentage * 100);
  displayValue.value = formatValue(calculateValue(percentage));

  if (tooltipRef.value) {
    tooltipRef.value.style.left = `${percentage * 100}%`;
  }
};

const startDragging = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
  isDragging.value = true;
  updateValue(event);
  document.addEventListener("mousemove", updateValue, { passive: false });
  document.addEventListener("touchmove", updateValue, { passive: false });
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchend", stopDragging);
};

const stopDragging = () => {
  isDragging.value = false;
  document.removeEventListener("mousemove", updateValue);
  document.removeEventListener("touchmove", updateValue);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchend", stopDragging);
};

onMounted(() => {
  if (tooltipRef.value) {
    tooltipRef.value.style.left = `${value.value}%`;
  }
});

onUnmounted(() => {
  document.removeEventListener("mousemove", updateValue);
  document.removeEventListener("touchmove", updateValue);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchend", stopDragging);
});
</script>

<template>
  <div style="margin-top: 2rem">
    <div
      class="slider-container"
      ref="sliderRef"
      @mousedown="startDragging"
      @touchstart="startDragging"
    >
      <div class="slider-track">
        <div class="slider-progress" :style="{ width: `${value}%` }"></div>
      </div>
      <div
        class="slider-thumb"
        :style="{ left: `${value}%` }"
        :class="{ 'is-dragging': isDragging }"
      >
        <div class="slider-tooltip" ref="tooltipRef">
          {{ displayValue }}
          <img class="tooltip-arrow" src="@/assets/Tail.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  height: 100%;
  cursor: pointer;
  touch-action: none;
  user-select: none;
}

.slider-track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1.7rem;
  background-color: var(--neutral-200);
  border-radius: 10px;
  overflow: hidden;
}

.slider-progress {
  height: 100%;
  background-color: var(--brand-dark-blue);
  border-radius: 3px;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  background: var(--brand-dark-blue);
  border: 6px solid var(--neutral-100);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.slider-thumb:hover,
.slider-thumb.is-dragging {
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.slider-tooltip {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  outline: 1px solid #e2e4e9;
  background-color: #fff;
  color: #0a0d14;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none;
  font-family: "FiraGO";
}
.slider-tooltip img {
  position: absolute;
  top: 2.5px;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
}

</style>
