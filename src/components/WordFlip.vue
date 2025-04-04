<script setup lang="ts">
import FlipWords from "@/components/ui/flip-words/FlipWords.vue";

defineProps<{
  TypeStrings: string[];
}>();
</script>

<template>
  <div class="flex h-[40rem] items-center justify-center px-4">
    <div
      class="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400"
    >
      <FlipWords
        :words="TypeStrings"
        :duration="3000"
        class="!text-primary text-4xl"
      />
    </div>
  </div>
</template>
