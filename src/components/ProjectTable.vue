<script setup lang="ts">
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { MoveRight, Dot, Github, MonitorSmartphone } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  data: {
    title: string;
    featured: string;
    year: string | number;
    cover: {
      src: string;
      width: number;
      height: number;
    };
    coverAlt: string;
    techstack: string[];
    description: string;
  };
}

const props = defineProps<{
  projects: Project[];
  order: string[];
}>();

// Create an order map and derive the ordered project list
const orderMap = Object.fromEntries(
  props.order.map((title, index) => [title.toLowerCase(), index]),
);

import { computed } from "vue";

const orderedProjects = computed(() =>
  props.projects
    .filter((p) => orderMap[p.data.title.toLowerCase()] !== undefined)
    .sort(
      (a, b) =>
        orderMap[a.data.title.toLowerCase()] -
        orderMap[b.data.title.toLowerCase()],
    ),
);
</script>

<template>
  <Table>
    <TableBody>
      <Dialog v-for="(project, index) in orderedProjects" :key="project.id">
        <DialogTrigger as-child>
          <TableRow>
            <TableCell class="w-[56.5px] font-medium">
              {{ String(index + 1).padStart(2, "0") }}
            </TableCell>
            <TableCell>
              <div class="font-semibold">{{ project.data.title }}</div>
              <div class="text-muted-foreground flex items-center text-xs">
                <span>{{ project.data.featured }}</span>
                <Dot :size="20" />
                <span>{{ project.data.year }}</span>
              </div>
            </TableCell>
            <TableCell class="text-right">
              <MoveRight :size="16" class="inline" />
            </TableCell>
          </TableRow>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{{ project.data.title }}</DialogTitle>
          </DialogHeader>
          <img
            class="aspect-video object-cover"
            :src="project.data.cover.src"
            :alt="project.data.coverAlt"
            :width="project.data.cover.width"
            :height="project.data.cover.height"
          />
          <p className="text-sm text-muted-foreground">
            {{ project.data.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="(tech, index) in project.data.techstack"
              :key="index"
              variant="outline"
              class="rounded-xs"
            >
              {{ tech }}
            </Badge>
          </div>
          <DialogFooter>
            <Button> <Github class="h-4 w-4" /> View Code </Button>
            <Button> <MonitorSmartphone class="h-4 w-4" /> Live Demo</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TableBody>
  </Table>
</template>
