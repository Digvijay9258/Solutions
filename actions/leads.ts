"use server";

import { leadFormSchema, type LeadFormData } from "@/schemas/lead";

// In-memory store for MVP (replace with Prisma/PostgreSQL in production)
const leads: (LeadFormData & { id: string; status: string; createdAt: Date })[] = [];

export async function submitLead(data: LeadFormData) {
  // Server-side validation
  const parsed = leadFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Please check your inputs.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    // Store lead
    const lead = {
      ...parsed.data,
      id: crypto.randomUUID(),
      status: "NEW",
      createdAt: new Date(),
    };
    leads.push(lead);

    // In production: Send admin notification email
    // In production: Send client confirmation email
    console.log("New lead received:", lead);

    return {
      success: true,
      message:
        "Thank you for contacting GURUVANTA ITs SOLUTION PVT LTD. We have received your enquiry and will review your requirements shortly.",
    };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}

export async function getLeads() {
  return leads;
}

export async function updateLeadStatus(id: string, status: string) {
  const lead = leads.find((l) => l.id === id);
  if (lead) {
    lead.status = status;
    return { success: true };
  }
  return { success: false, error: "Lead not found" };
}
