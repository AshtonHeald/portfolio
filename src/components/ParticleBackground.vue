<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Particles from "@/components/ui/particles-bg/ParticlesBg.vue";

const color = ref("#000000");

const updateColor = () => {
  const isDark = document.documentElement.classList.contains("dark");
  color.value = isDark ? "#ffffff" : "#000000";
};

let observer;

onMounted(() => {
  updateColor();

  observer = new MutationObserver(() => {
    updateColor();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"], // Watch class changes now, not data-theme
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <Particles
    class="absolute inset-0"
    :quantity="100"
    :ease="80"
    :color="color"
    refresh
  />
</template>
