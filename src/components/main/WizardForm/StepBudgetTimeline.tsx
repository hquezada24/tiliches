"use client";
import { WizardRadioCards, WizardTextArea } from "./WizardField";
import { BUDGET_RANGES, TIMELINES } from "@/types/main/WizardForm/schema";
import colors from "@/styles/colors";

const StepBudgetTimeline = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium mb-3" style={{ color: colors.text }}>
          Estimated Budget <span style={{ color: colors.primary }}>*</span>
        </p>
        <WizardRadioCards
          name="estimatedBudget"
          columns={3}
          options={BUDGET_RANGES.map((b) => ({
            value: b.value,
            label: b.label,
          }))}
        />
      </div>

      <div>
        <p className="text-sm font-medium mb-3" style={{ color: colors.text }}>
          Preferred Timeline <span style={{ color: colors.primary }}>*</span>
        </p>
        <WizardRadioCards
          name="timeline"
          columns={2}
          options={TIMELINES.map((t) => ({
            value: t.value,
            label: t.label,
          }))}
        />
      </div>

      <WizardTextArea
        name="additionalNotes"
        label="¿Algo más?"
        placeholder="Comparte cualquier detalle adicional, referencia, fuente de inspiración o pregunta..."
        rows={3}
      />
    </div>
  );
};

export default StepBudgetTimeline;
