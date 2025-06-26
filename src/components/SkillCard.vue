<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import * as icons from "lucide-vue-next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Props
const props = defineProps({
  id: String,
  title: String,
  description: String,
  icon: String,
  isFeatured: Boolean,
  concepts: Array,
});

// Global reactive shared state
const currentHoveredId = ref(null);
const cardRef = ref(null);

// Helpers
const isHovered = computed(() => currentHoveredId.value === props.id);

// Touch logic
const touchStartTime = ref(0);
const touchEndTime = ref(0);
const touchThreshold = 200;

function handleTouchStart() {
  touchStartTime.value = Date.now();
}

function handleTouchEnd(event) {
  touchEndTime.value = Date.now();
  if (touchEndTime.value - touchStartTime.value < touchThreshold) {
    if (currentHoveredId.value === props.id) {
      currentHoveredId.value = null; // toggle off
    } else {
      currentHoveredId.value = props.id; // toggle on
    }
  }
}

// Click/touch outside handler
function handleClickOutside(event) {
  if (cardRef.value && !cardRef.value.contains(event.target)) {
    currentHoveredId.value = null;
  }
}

onMounted(() => {
  document.addEventListener("touchstart", handleClickOutside, true);
  document.addEventListener("mousedown", handleClickOutside, true); // for desktop too
});

onBeforeUnmount(() => {
  document.removeEventListener("touchstart", handleClickOutside, true);
  document.removeEventListener("mousedown", handleClickOutside, true);
});

// Icon
const iconComponent = computed(() => icons[props.icon] || icons["CircleSmall"]);

function handleKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent page scroll on space
    if (currentHoveredId.value === props.id) {
      currentHoveredId.value = null;
    } else {
      currentHoveredId.value = props.id;
    }
  }
}
</script>

<template>
  <Card
    tabindex="0"
    role="button"
    :aria-pressed="isHovered.toString()"
    class="relative col-span-1 flex h-full min-h-[140px] w-full max-w-[280px] cursor-pointer flex-col overflow-hidden rounded-sm"
    :class="{ 'row-span-2': isFeatured, 'row-span-1': !isFeatured }"
    :data-key="id"
    @mouseenter="currentHoveredId = id"
    @mouseleave="currentHoveredId = null"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @keydown="handleKeydown"
  >
    <!-- Use a div inside to capture the real DOM element -->
    <div ref="cardRef" class="contents">
      <CardHeader
        class="flex h-full grid-rows-[inherit] flex-col items-center justify-center px-6 py-8 text-center"
      >
        <div class="flex items-center gap-1">
          <component :is="iconComponent" class="h-5 w-5" />
          <CardTitle>{{ title }}</CardTitle>
        </div>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>

      <CardContent
        class="bg-background absolute inset-0 z-10 flex transform flex-col border-t-4 p-3 transition-transform duration-300 ease-in-out"
        :class="{
          'translate-y-0': isHovered,
          'translate-y-full': !isHovered,
        }"
      >
        <ul class="flex flex-wrap gap-1">
          <li v-for="concept in concepts" :key="concept">
            <Badge variant="outline" class="rounded-xs text-xs">
              {{ concept }}</Badge
            >
          </li>
        </ul>
      </CardContent>
    </div>
  </Card>
</template>

<style></style>
