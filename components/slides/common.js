import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

export const SlideSecondaryTitle = ({ isMobile, bg, secondaryTitle }) =>
   secondaryTitle ? (
      <Title
         opacity={0.5}
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         textAlign={isMobile ? "center" : "left"}
         marginBottom="1vh"
         small
      >
         {secondaryTitle}
      </Title>
   ) : null;

export const SlideTitle = ({ children, bg, isMobile }) => {
   return (
      <Title
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         fontSize={fontSizes.H2}
         fontWeight={fontWeights.BOLD}
         textAlign={isMobile ? "center" : "left"}
         marginBottom="1vh"
         small
      >
         {children}
      </Title>
   );
};
