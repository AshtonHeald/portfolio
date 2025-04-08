<script setup>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";
import * as icons from "lucide-vue-next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

const props = defineProps({
  id: String,
  title: String,
  description: String,
  icon: String,
  isFeatured: Boolean,
  hoverContent: String,
});

const isHovered = ref(false);
const cardRef = ref(null);

// Handle tap toggling
function toggleHover() {
  isHovered.value = !isHovered.value;
}

// Close the hover content if clicked outside
onClickOutside(cardRef, () => {
  isHovered.value = false;
});

// Dynamically resolve icon component
const iconComponent = computed(() => {
  return icons[props.icon] || icons["CircleSmall"];
});
</script>

<template>
  <Card
    ref="cardRef"
    class="relative col-span-1 flex h-full w-full cursor-pointer flex-col overflow-hidden px-6 py-8"
    :class="{ 'row-span-2': isFeatured, 'row-span-1': !isFeatured }"
    :data-key="id"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="toggleHover"
  >
    <CardHeader>
      <div class="flex items-center gap-1">
        <component :is="iconComponent" class="h-5 w-5" />
        <CardTitle>{{ title }}</CardTitle>
      </div>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>

    <!-- Hover Content -->
    <CardContent
      class="bg-primary absolute inset-0 z-10 flex transform flex-col justify-center p-6 transition-transform duration-300 ease-in-out"
      :class="{
        'translate-y-0': isHovered,
        'translate-y-full': !isHovered,
      }"
    >
      <p class="text-primary-foreground">
        <slot name="hover-content">
          {{ hoverContent || "Hover content goes here" }}
        </slot>
      </p>
    </CardContent>

    <slot />
  </Card>
</template>
