import React from "react";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
import { fontSizes, fontWeights } from "utils/fontStyles";

const ModalTriggerText = ({ children, onClick, color, fontWeight }) => {
  return (
    <TextSpan
      color={color || colors.BLACK}
      fontWeight={fontWeight || fontWeights.BOLD}
      textDecoration="underline"
      cursor="pointer"
      onClick={onClick}
      fontSize={fontSizes.MEDIUM}
    >
      {children}
    </TextSpan>
  );
};

export default ModalTriggerText;
