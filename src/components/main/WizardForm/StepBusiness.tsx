"use client";
import { WizardTextArea } from "./WizardField";

const StepBusiness = () => {
  return (
    <div className="space-y-5">
      <WizardTextArea
        name="businessDescription"
        label="Cuéntanos sobre su negocio."
        placeholder="¿A qué se dedica su empresa? ¿Qué productos o servicios ofrece? ¿Quiénes son sus clientes ideales?"
        rows={5}
        required
      />
    </div>
  );
};

export default StepBusiness;
