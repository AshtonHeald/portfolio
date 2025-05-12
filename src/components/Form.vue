<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
//import { toast } from "@/components/ui/toast/use-toast";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { h } from "vue";
import * as z from "zod";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  }),
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
});

/* const onSubmit = handleSubmit((values) => {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2)),
    ),
  });
});
*/
</script>

<template>
  <Card>
    <CardContent class="py-6">
      <form class="space-y-2">
        <FormField
          v-slot="{ componentField }"
          name="name"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Your Name"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="email"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="example@domain.com"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="sibject"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Subject</FormLabel>
            <FormControl>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="collaboration">
                      Collaboration Opportunity
                    </SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="talk">Let's Talk</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="name"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Your Name"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" class="mt-4">Send Message</Button>
      </form>
    </CardContent>
  </Card>
</template>
