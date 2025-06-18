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
  title: string;
  featured: string;
  year: string | number;
  cover: {
    src: string;
    alt: string;
  };
  techstack: string[];
  description: string;
}

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <Table class="mx-auto max-w-[500px] lg:max-w-full">
    <TableBody>
      <Dialog v-for="(project, index) in props.projects" :key="project.title">
        <DialogTrigger as-child>
          <TableRow>
            <TableCell class="w-[56.5px] font-medium">
              {{ String(index + 1).padStart(2, "0") }}
            </TableCell>
            <TableCell>
              <div class="font-semibold">{{ project.title }}</div>
              <div class="text-muted-foreground flex items-center text-xs">
                <span>{{ project.featured }}</span>
                <Dot :size="20" />
                <span>{{ project.year }}</span>
              </div>
            </TableCell>
            <TableCell class="text-right">
              <MoveRight :size="16" class="inline" />
            </TableCell>
          </TableRow>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{{ project.title }}</DialogTitle>
          </DialogHeader>
          <img
            class="aspect-video object-cover"
            :src="project.cover.src"
            :alt="project.cover.alt"
            width="1600px"
            height="900px"
          />
          <p className="text-sm text-muted-foreground">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="(tech, index) in project.techstack"
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
