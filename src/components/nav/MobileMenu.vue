<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" size="icon"> <Menu class="!h-5 !w-5" /> </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetClose as-child>
        <slot />
      </SheetClose>
    </SheetContent>
  </Sheet>
</template>
