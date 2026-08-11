"use client";
import { useFormContext, Path, FieldError } from "react-hook-form";
import { FormData } from "@/types/main/WizardForm/schema";
import colors from "@/styles/colors";

/* ─────────────── Shared Error Message ─────────────── */
export const FieldError_ = ({ error }: { error?: FieldError }) => {
  if (!error?.message) return null;
  return (
    <p
      className="mt-1.5 text-sm"
      style={{ color: "#DC2626" }}
      role="alert"
    >
      {error.message}
    </p>
  );
};

/* ─────────────── Label ─────────────── */
const Label = ({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label
    htmlFor={htmlFor}
    className="block mb-1.5 text-sm font-medium"
    style={{ color: colors.text }}
  >
    {children}
    {required && (
      <span className="ml-0.5" style={{ color: colors.primary }}>
        *
      </span>
    )}
  </label>
);

/* ─────────────── Text Input ─────────────── */
type InputProps = {
  name: Path<FormData>;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

export const WizardInput = ({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: error ? "#DC2626" : `${colors.text}20`,
          color: colors.text,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = colors.primary;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}1A`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "#DC2626"
            : `${colors.text}20`;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <FieldError_ error={error} />
    </div>
  );
};

/* ─────────────── TextArea ─────────────── */
type TextAreaProps = {
  name: Path<FormData>;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

export const WizardTextArea = ({
  name,
  label,
  placeholder,
  rows = 4,
  required,
}: TextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: error ? "#DC2626" : `${colors.text}20`,
          color: colors.text,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = colors.primary;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}1A`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "#DC2626"
            : `${colors.text}20`;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <FieldError_ error={error} />
    </div>
  );
};

/* ─────────────── Radio Cards (single select) ─────────────── */
type RadioCardOption = {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
};

type RadioCardsProps = {
  name: Path<FormData>;
  options: RadioCardOption[];
  columns?: number;
};

export const WizardRadioCards = ({
  name,
  options,
  columns = 2,
}: RadioCardsProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();
  const selected = watch(name);
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <label
              key={option.value}
              className="relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 group"
              style={{
                backgroundColor: isSelected
                  ? `${colors.primary}08`
                  : "#FFFFFF",
                borderColor: isSelected
                  ? colors.primary
                  : `${colors.text}14`,
                boxShadow: isSelected
                  ? `0 0 0 3px ${colors.primary}1A`
                  : "none",
              }}
            >
              <input
                type="radio"
                value={option.value}
                {...register(name)}
                className="sr-only"
              />
              {option.icon && (
                <div
                  className="shrink-0 mt-0.5"
                  style={{
                    color: isSelected ? colors.primary : `${colors.text}66`,
                  }}
                >
                  {option.icon}
                </div>
              )}
              <div className="min-w-0">
                <span
                  className="block text-sm font-medium"
                  style={{
                    color: isSelected ? colors.text : `${colors.text}CC`,
                  }}
                >
                  {option.label}
                </span>
                {option.description && (
                  <span
                    className="block text-xs mt-0.5"
                    style={{ color: `${colors.text}80` }}
                  >
                    {option.description}
                  </span>
                )}
              </div>
              {isSelected && (
                <div
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.primary }}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </label>
          );
        })}
      </div>
      <FieldError_ error={error} />
    </div>
  );
};

/* ─────────────── Checkbox Cards (multi-select) ─────────────── */
type CheckboxCardOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type CheckboxCardsProps = {
  name: Path<FormData>;
  options: CheckboxCardOption[];
  columns?: number;
};

export const WizardCheckboxCards = ({
  name,
  options,
  columns = 3,
}: CheckboxCardsProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();
  const current = (watch(name) as string[] | undefined) ?? [];
  const error = errors[name] as FieldError | undefined;

  const toggle = (value: string) => {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(name, next as never, { shouldValidate: true });
  };

  return (
    <div>
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => {
          const isSelected = current.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggle(option.value)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 text-center"
              style={{
                backgroundColor: isSelected
                  ? `${colors.primary}08`
                  : "#FFFFFF",
                borderColor: isSelected
                  ? colors.primary
                  : `${colors.text}14`,
                boxShadow: isSelected
                  ? `0 0 0 3px ${colors.primary}1A`
                  : "none",
              }}
            >
              {option.icon && (
                <div
                  style={{
                    color: isSelected ? colors.primary : `${colors.text}66`,
                  }}
                >
                  {option.icon}
                </div>
              )}
              <span
                className="text-sm font-medium"
                style={{
                  color: isSelected ? colors.text : `${colors.text}CC`,
                }}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
      <FieldError_ error={error} />
    </div>
  );
};
