<script setup lang="ts">
import { Button } from "@/components/ui/button";

const navItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];
</script>

<template>
  <nav>
    <ul
      class="flex w-auto flex-col items-center gap-3 pt-12 md:flex-row md:gap-1 md:pt-0 xl:flex-col xl:items-center xl:gap-0.5"
    >
      <li v-for="item in navItems" :key="item.href">
        <Button
          as-child
          variant="ghost"
          class="w-40 px-4 md:w-auto xl:w-40 xl:px-0"
        >
          <a :href="item.href" :aria-label="`Navigate to ${item.text} section`">
            {{ item.text }}
          </a>
        </Button>
      </li>
    </ul>
  </nav>
</template>
