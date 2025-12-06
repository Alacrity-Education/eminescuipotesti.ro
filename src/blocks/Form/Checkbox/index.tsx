import type { CheckboxField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import React from "react";
import { Error } from "../Error";
import { Width } from "../Width";

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl>;
    register: UseFormRegister<FieldValues>;
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  // 1. Get the registration props
  const props = register(name, { required: required });

  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          // 2. Use defaultChecked for initial state in RHF
          defaultChecked={defaultValue}
          id={name}
          // 3. Spread props. This includes name, ref, onChange, and onBlur.
          // Do NOT add another onChange after this.
          {...props}
          className="checkbox checkbox-primary"
        />
        <Label htmlFor={name}>
          {required && (
            <span className="required">
              * <span className="sr-only">(required)</span>
            </span>
          )}
          {label}
        </Label>
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  );
};
