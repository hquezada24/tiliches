"use client";
import { WizardInput } from "./WizardField";

const StepContactInfo = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <WizardInput
          name="name"
          label="Nombre Completo"
          placeholder="Juan Lopez"
          required
        />
        <WizardInput
          name="email"
          label="Correo electrónico"
          placeholder="juan@ejemplo.com"
          type="email"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <WizardInput
          name="phone"
          label="Número de teléfono"
          placeholder="(677) 000-0000"
          type="tel"
        />
        <WizardInput
          name="companyName"
          label="Negocio / Empresa"
          placeholder="Empresa SA de CV"
        />
      </div>
    </div>
  );
};

export default StepContactInfo;
