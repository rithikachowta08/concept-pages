import React from "react";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
import { fontWeights } from "utils/fontStyles";

const ModalTriggerText = ({ children, onClick, color }) => {
   return (
      <TextSpan
         color={color || colors.BLACK}
         fontWeight={fontWeights.BOLD}
         textDecoration="underline"
         cursor="pointer"
         onClick={onClick}
         fontSize="2.2rem"
      >
         {children}
      </TextSpan>
   );
};

export default ModalTriggerText;
