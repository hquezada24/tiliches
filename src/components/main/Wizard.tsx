"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  User,
  Building2,
  Target,
  Puzzle,
  Globe,
  DollarSign,
} from "lucide-react";
import colors from "@/styles/colors";
import { FormData, schema, STEP_FIELDS } from "@/types/main/WizardForm/schema";
import StepContactInfo from "./WizardForm/StepContactInfo";
import StepBusiness from "./WizardForm/StepBusiness";
import StepGoal from "./WizardForm/StepGoal";
import StepFeatures from "./WizardForm/StepFeatures";
import StepCurrentSituation from "./WizardForm/StepCurrentSituation";
import StepBudgetTimeline from "./WizardForm/StepBudgetTimeline";

const STEPS = [
  {
    title: "Información de contacto",
    subtitle: "¿Cómo te podemos contactar?",
    icon: <User className="w-4 h-4" />,
    component: <StepContactInfo />,
  },
  {
    title: "Tu negocio",
    subtitle: "Cuéntanos lo que haces.",
    icon: <Building2 className="w-4 h-4" />,
    component: <StepBusiness />,
  },
  {
    title: "Meta",
    subtitle: "¿Qué quieres lograr con tu sitio web?",
    icon: <Target className="w-4 h-4" />,
    component: <StepGoal />,
  },
  {
    title: "Características deseadas",
    subtitle: "Selecciona todo lo que quieras incluir.",
    icon: <Puzzle className="w-4 h-4" />,
    component: <StepFeatures />,
  },
  {
    title: "Situación actual",
    subtitle: "¿Ya tienes una sitio web?",
    icon: <Globe className="w-4 h-4" />,
    component: <StepCurrentSituation />,
  },
  {
    title: "Presupuesto y cronograma",
    subtitle: "Pongámonos de acuerdo sobre el alcance y los plazos.",
    icon: <DollarSign className="w-4 h-4" />,
    component: <StepBudgetTimeline />,
  },
];

/* ─────────────── Progress Bar ─────────────── */
const ProgressBar = ({ currentStep }: { currentStep: number }) => (
  <div className="flex items-center justify-between mb-10 px-2">
    {STEPS.map((step, index) => {
      const isCompleted = index < currentStep;
      const isActive = index === currentStep;

      return (
        <div key={index} className="flex items-center flex-1 last:flex-none">
          {/* Step circle */}
          <div className="flex flex-col items-center relative">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0"
              style={{
                backgroundColor: isCompleted
                  ? colors.primary
                  : isActive
                    ? `${colors.primary}15`
                    : `${colors.text}08`,
                border: isActive
                  ? `2px solid ${colors.primary}`
                  : isCompleted
                    ? "none"
                    : `2px solid ${colors.text}20`,
              }}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-4 h-4 text-white" />
              ) : (
                <span
                  className="text-xs font-semibold"
                  style={{
                    color: isActive ? colors.primary : `${colors.text}60`,
                  }}
                >
                  {index + 1}
                </span>
              )}
            </div>
            {/* Label (hidden on small screens) */}
            <span
              className="hidden lg:block absolute -bottom-6 text-[11px] font-medium whitespace-nowrap"
              style={{
                color: isActive
                  ? colors.primary
                  : isCompleted
                    ? colors.text
                    : `${colors.text}60`,
              }}
            >
              {step.title.split(" ")[0]}
            </span>
          </div>

          {/* Connecting line */}
          {index < STEPS.length - 1 && (
            <div
              className="flex-1 h-0.5 mx-2 rounded-full transition-all duration-500"
              style={{
                backgroundColor: isCompleted
                  ? colors.primary
                  : `${colors.text}14`,
              }}
            />
          )}
        </div>
      );
    })}
  </div>
);

/* ─────────────── Success State ─────────────── */
const SuccessState = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center py-12"
  >
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      }}
    >
      <CheckCircle2 className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text }}>
      Thank you!
    </h3>
    <p
      className="max-w-md mx-auto"
      style={{ color: `${colors.text}99`, lineHeight: 1.7 }}
    >
      Se han enviado los detalles de su proyecto. Revisaré todo y me pondré en
      contacto con usted en un plazo de 24 horas con una propuesta
      personalizada.
    </p>
  </motion.div>
);

/* ─────────────── Wizard Form ─────────────── */
export default function WizardForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      businessDescription: "",
      websiteGoal: "",
      desiredFeatures: [],
      hasExistingWebsite: undefined,
      existingWebsiteUrl: "",
      estimatedBudget: "",
      timeline: "",
      additionalNotes: "",
    },
  });

  const nextStep = async () => {
    const fields = STEP_FIELDS[step];
    const isValid = await methods.trigger(fields);
    if (!isValid) return;

    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = (data: FormData) => {
    console.log("Wizard submission:", data);
    setIsSubmitted(true);
  };

  const currentStep = STEPS[step];
  const isLastStep = step === STEPS.length - 1;

  return (
    <FormProvider {...methods}>
      <div
        className="min-h-screen pt-28 pb-16 px-4"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: colors.text }}
            >
              Empieza tu proyecto
            </h1>
            <p className="text-base" style={{ color: `${colors.text}99` }}>
              Responde a unas pocas preguntas para que podamos preparar la mejor
              propuesta para ti.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border p-6 sm:p-10"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: `${colors.text}14`,
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
            }}
          >
            {isSubmitted ? (
              <SuccessState />
            ) : (
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {/* Progress */}
                <ProgressBar currentStep={step} />

                {/* Step Header */}
                <div className="mb-8 mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div style={{ color: colors.primary }}>
                      {currentStep.icon}
                    </div>
                    <h2
                      className="text-xl font-bold"
                      style={{ color: colors.text }}
                    >
                      {currentStep.title}
                    </h2>
                  </div>
                  <p className="text-sm" style={{ color: `${colors.text}80` }}>
                    {currentStep.subtitle}
                  </p>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {currentStep.component}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div
                  className="flex items-center justify-between mt-10 pt-6 border-t"
                  style={{ borderColor: `${colors.text}0A` }}
                >
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-200"
                      style={{
                        borderColor: `${colors.text}20`,
                        color: `${colors.text}CC`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${colors.text}08`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Retroceder
                    </button>
                  ) : (
                    <div />
                  )}

                  {isLastStep ? (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 rounded-lg text-white text-sm font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: `0 4px 16px ${colors.primary}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          colors.secondary;
                        e.currentTarget.style.boxShadow = `0 8px 24px ${colors.secondary}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primary;
                        e.currentTarget.style.boxShadow = `0 4px 16px ${colors.primary}40`;
                      }}
                    >
                      Entregar
                      <Send className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-8 py-3 rounded-lg text-white text-sm font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: `0 4px 16px ${colors.primary}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          colors.secondary;
                        e.currentTarget.style.boxShadow = `0 8px 24px ${colors.secondary}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primary;
                        e.currentTarget.style.boxShadow = `0 4px 16px ${colors.primary}40`;
                      }}
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* Trust indicators */}
          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center justify-center gap-6 mt-8 flex-wrap"
              style={{ color: `${colors.text}80` }}
            >
              <div className="flex items-center gap-1.5 text-xs">
                <CheckCircle2
                  className="w-3.5 h-3.5"
                  style={{ color: colors.primary }}
                />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <CheckCircle2
                  className="w-3.5 h-3.5"
                  style={{ color: colors.primary }}
                />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <CheckCircle2
                  className="w-3.5 h-3.5"
                  style={{ color: colors.primary }}
                />
                <span>Respuesta en un plazo de 24 horas</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </FormProvider>
  );
}
