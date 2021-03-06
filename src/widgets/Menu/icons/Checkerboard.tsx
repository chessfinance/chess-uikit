import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path d="M2 2v20h20V2H2m18 10h-4v4h4v4h-4v-4h-4v4H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4v4m-4-4v4h-4V8h4m-4 4v4H8v-4h4z"/>    
    </Svg>
  );
};

export default Icon;
