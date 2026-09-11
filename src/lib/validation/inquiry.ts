import { z } from "zod";


/**
 * Sanitizes input string to prevent XSS and strip unwanted HTML/control characters
 */
export function sanitizeInput(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "") // Remove HTML tag brackets
    .trim();
}

/**
 * Normalizes and validates Indian & International phone numbers
 * Accepts: "+91 9876543210", "9876543210", "+919876543210", "09876543210"
 */
export function sanitizePhone(phone: unknown): string {
  if (typeof phone !== "string") return "";
  const cleaned = phone.replace(/[^\d+]/g, "").trim();
  return cleaned;
}

export const inquiryFormSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters long.")
    .max(100, "Full name cannot exceed 100 characters.")
    .transform(sanitizeInput),

  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address.")
    .max(150, "Email address cannot exceed 150 characters.")
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits).")
    .max(15, "Phone number is too long.")
    .regex(/^(\+?\d{1,4})?[\d\s-]{10,15}$/, "Please enter a valid phone number.")
    .transform(sanitizePhone),

  services: z
    .array(z.string())
    .min(1, "Please select at least one service or test of interest.")
    .refine(
      (services) => services.every((s) => typeof s === "string" && s.trim().length > 0),
      "Invalid service selection"
    ),

  message: z
    .string()
    .max(2000, "Message cannot exceed 2000 characters.")
    .optional()
    .default("")
    .transform((val) => (val ? sanitizeInput(val) : "")),

  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to be contacted by Guruji Overseas to submit.",
    }),

  honeypot: z
    .string()
    .optional()
    .refine((val) => !val || val.trim().length === 0, {
      message: "Spam submission detected.",
    }),
});

export type InquiryFormSchemaInput = z.input<typeof inquiryFormSchema>;
export type InquiryFormSchemaOutput = z.output<typeof inquiryFormSchema>;
