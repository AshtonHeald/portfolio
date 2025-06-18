<script setup>
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Badge from "@/components/ui/badge/Badge.vue";

const props = defineProps({
  skills: Array,
});
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem
      v-for="(skill, index) in skills"
      :key="`skill-${index}`"
      :value="`skill-${index}`"
    >
      <AccordionTrigger>
        <span>{{ skill.title }}</span>
      </AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">{{ skill.description }}</p>
        <ul class="flex flex-wrap gap-1">
          <li v-for="concept in skill.concepts" :key="concept">
            <Badge variant="outline" class="rounded-xs text-xs">
              {{ concept }}
            </Badge>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
