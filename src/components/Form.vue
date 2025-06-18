<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "vue-sonner";

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import * as z from "zod";

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "Name is required").max(50),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    subject: z.string().min(1, "Please choose a subject"),
    message: z.string().min(5, "Message must be at least 5 characters"),
  }),
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const formRef = ref<HTMLFormElement | null>(null);
const isSubmitting = ref(false);
const lastSubmissionTime = ref<number | null>(null);
const submissionInterval = 300000; // Minimum time (in milliseconds) between submissions

const onSubmit = handleSubmit(async (values) => {
  if (!formRef.value || isSubmitting.value) return;

  const currentTime = Date.now();
  if (
    lastSubmissionTime.value &&
    currentTime - lastSubmissionTime.value < submissionInterval
  ) {
    toast("Please wait a moment before sending another message.", {
      duration: 1500,
    });
    return;
  }

  isSubmitting.value = true;

  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, {
      publicKey: PUBLIC_KEY,
    });
    toast("Message sent!", {
      description: `Thanks ${values.name}, I got your message.`,
    });
    resetForm();
    lastSubmissionTime.value = currentTime;
  } catch (error) {
    toast("Something went wrong..", {
      description: "Please try an alternative method.",
    });
    console.error("EmailJS failed", error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <Card>
    <CardContent class="py-6">
      <form ref="formRef" class="space-y-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name">
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
        <FormField v-slot="{ componentField }" name="email">
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
        <FormField v-slot="{ componentField }" name="subject">
          <FormItem>
            <FormLabel>Subject</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
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
        <FormField v-slot="{ componentField }" name="message">
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Message"
                class="resize-none"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" class="mt-2 w-full">Send Message</Button>
      </form>
    </CardContent>
  </Card>
</template>
