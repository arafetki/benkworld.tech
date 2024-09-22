import {z} from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1,"Subject is required."),
  message: z.string().min(1, "Message is required.").max(1000,"Message cannot exceed 1000 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const idParamSchema = z.coerce.number().positive("ID must be greater than zero");
