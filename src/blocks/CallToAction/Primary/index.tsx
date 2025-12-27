import React from "react";

import type { CallToActionBlock as CTABlockProps, Form } from "@/payload-types";

import { CTAPrimitive } from "../Primitive";

export const PrimaryCTA: React.FC<CTABlockProps> = (props) => {
  return (
    <div className={"container mx-auto  max-w-2xl lg:max-w-4xl"}>
    <div className={"w-full "}>
    <CTAPrimitive

      {...props}
      form={props.form as Form | undefined | null}
      bgToken="primary" textToken="primary" buttonToken="primary" />
    </div>
    </div>
  );
};
