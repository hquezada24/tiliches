"use client";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/types/main/WizardForm/schema";
import { WizardInput } from "./WizardField";
import colors from "@/styles/colors";
import { Globe, X } from "lucide-react";

const StepCurrentSituation = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();
  const hasExisting = watch("hasExistingWebsite");

  const select = (value: boolean) => {
    setValue("hasExistingWebsite", value, { shouldValidate: true });
    if (!value) {
      setValue("existingWebsiteUrl", "", { shouldValidate: false });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => select(true)}
          className="flex flex-col items-center gap-3 p-6 rounded-xl border cursor-pointer transition-all duration-200"
          style={{
            backgroundColor:
              hasExisting === true ? `${colors.primary}08` : "#FFFFFF",
            borderColor:
              hasExisting === true ? colors.primary : `${colors.text}14`,
            boxShadow:
              hasExisting === true ? `0 0 0 3px ${colors.primary}1A` : "none",
          }}
        >
          <Globe
            className="w-8 h-8"
            style={{
              color: hasExisting === true ? colors.primary : `${colors.text}66`,
            }}
          />
          <span
            className="text-sm font-medium"
            style={{
              color: hasExisting === true ? colors.text : `${colors.text}CC`,
            }}
          >
            Sí, tengo un sitio web
          </span>
        </button>

        <button
          type="button"
          onClick={() => select(false)}
          className="flex flex-col items-center gap-3 p-6 rounded-xl border cursor-pointer transition-all duration-200"
          style={{
            backgroundColor:
              hasExisting === false ? `${colors.primary}08` : "#FFFFFF",
            borderColor:
              hasExisting === false ? colors.primary : `${colors.text}14`,
            boxShadow:
              hasExisting === false ? `0 0 0 3px ${colors.primary}1A` : "none",
          }}
        >
          <X
            className="w-8 h-8"
            style={{
              color:
                hasExisting === false ? colors.primary : `${colors.text}66`,
            }}
          />
          <span
            className="text-sm font-medium"
            style={{
              color: hasExisting === false ? colors.text : `${colors.text}CC`,
            }}
          >
            No, empezando de cero
          </span>
        </button>
      </div>

      {errors.hasExistingWebsite && (
        <p className="text-sm" style={{ color: "#DC2626" }} role="alert">
          {errors.hasExistingWebsite.message}
        </p>
      )}

      {hasExisting === true && (
        <div className="pt-2">
          <WizardInput
            name="existingWebsiteUrl"
            label="URL del sitio web"
            placeholder="https://www.ejemplo.com"
          />
        </div>
      )}
    </div>
  );
};

export default StepCurrentSituation;
