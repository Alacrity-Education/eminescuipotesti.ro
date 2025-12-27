"use client";
import React from "react";
import type { Form as FormType } from "@/payload-types";
import { FormBlock as FormRenderer } from "../Form/Component";

export type CTAModalProps = {
  id?: string; // element id for dialog
  buttonText?: string;
  form?: FormType;
  buttonClassName?: string;
};

export const CTAModal: React.FC<CTAModalProps> = ({ id = "cta_modal", buttonText = "Open", form, buttonClassName = "btn" }) => {
  const openModal = () => {
    const el = document.getElementById(id) as HTMLDialogElement | null;
    el?.showModal();
  };

  return (
    <div>
      <button className={buttonClassName} onClick={openModal}>
        {buttonText}
      </button>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {form ? (
            <FormRenderer id={`${id}-form`} form={form as any} enableIntro={false} />
          ) : (
            <div>No form selected</div>
          )}

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

