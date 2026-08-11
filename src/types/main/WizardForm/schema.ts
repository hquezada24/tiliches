import { z } from "zod";

export const WEBSITE_GOALS = [
  {
    value: "attract-customers",
    label: "Atraer nuevos clientes",
    icon: "Users",
  },
  {
    value: "showcase-portfolio",
    label: "Mostrar mi trabajo o mis servicios",
    icon: "Briefcase",
  },
  {
    value: "sell-products",
    label: "Vender productos en línea",
    icon: "ShoppingBag",
  },
  {
    value: "receive-inquiries",
    label: "Recibir cotizaciones o consultas",
    icon: "MessageSquare",
  },
  {
    value: "internal-tool",
    label: "Crea una herramienta interna o un panel de control.",
    icon: "LayoutDashboard",
  },
  { value: "other", label: "Algo más", icon: "Sparkles" },
] as const;

export const DESIRED_FEATURES = [
  { value: "contact-form", label: "Formulario de contacto", icon: "Mail" },
  { value: "gallery", label: "Galería de fotos", icon: "Image" },
  { value: "testimonials", label: "Testimonios", icon: "Quote" },
  { value: "blog", label: "Blog", icon: "FileText" },
  { value: "e-commerce", label: "Tienda en línea", icon: "ShoppingCart" },
  {
    value: "booking-system",
    label: "Reservas / Programación",
    icon: "Calendar",
  },
  { value: "analytics", label: "Panel de análisis", icon: "BarChart3" },
  {
    value: "social-media",
    label: "Integración con redes sociales",
    icon: "Share2",
  },
  { value: "other", label: "Otro", icon: "Plus" },
] as const;

export const BUDGET_RANGES = [
  { value: "under-1000", label: "Menos de $1,000" },
  { value: "1000-2000", label: "$1,000 – $2,000" },
  { value: "2000-5000", label: "$2,000 – $5,000" },
  { value: "5000-plus", label: "$5,000+" },
  { value: "not-sure", label: "No sé" },
] as const;

export const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2-months", label: "1 – 2 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "flexible", label: "Flexible / no rush" },
] as const;

export const schema = z.object({
  // Step 1: Contact Info
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  companyName: z.string().optional(),

  // Step 2: Your Business
  businessDescription: z
    .string()
    .min(10, "Please describe your business in at least a few words"),

  // Step 3: Website Goal
  websiteGoal: z.string().min(1, "Please select a goal for your website"),

  // Step 4: Desired Features
  desiredFeatures: z
    .array(z.string())
    .min(1, "Please select at least one feature"),

  // Step 5: Current Situation
  hasExistingWebsite: z.boolean({
    required_error: "Please let us know if you have an existing website",
  }),
  existingWebsiteUrl: z.string().optional(),

  // Step 6: Budget & Timeline
  estimatedBudget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  additionalNotes: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;

/** Fields to validate per step index */
export const STEP_FIELDS: (keyof FormData)[][] = [
  ["name", "email", "phone", "companyName"],
  ["businessDescription"],
  ["websiteGoal"],
  ["desiredFeatures"],
  ["hasExistingWebsite", "existingWebsiteUrl"],
  ["estimatedBudget", "timeline", "additionalNotes"],
];
