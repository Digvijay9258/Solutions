import { z } from "zod";

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  companyName: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional().or(z.literal("")),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters about your project")
    .max(2000, "Description is too long"),
  contactMethod: z.string().optional().or(z.literal("")),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
