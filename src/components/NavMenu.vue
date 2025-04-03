<script setup lang="ts">
import { Button } from "@/components/ui/button";

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];
</script>

<template>
  <nav>
    <ul class="flex flex-col items-center">
      <li v-for="item in navItems" :key="item.href">
        <Button as-child variant="ghost" size="sm" class="w-40 px-0">
          <a :href="item.href" :aria-label="`Navigate to ${item.text} section`">
            {{ item.text }}
          </a>
        </Button>
      </li>
    </ul>
  </nav>
</template>
