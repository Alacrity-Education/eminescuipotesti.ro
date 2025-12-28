import React from "react";
import type { StaticMapBlock as StaticMapBlockProps } from "@/payload-types";
import {StaticMapBlockComponent  as Client} from "./Component.client";


export const StaticMapBlock: React.FC<StaticMapBlockProps> = (props) => {
  return <Client {...props} />;
};

