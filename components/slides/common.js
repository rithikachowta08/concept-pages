import styled from "styled-components";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

export const SlideSecondaryTitle = ({ centerAlign, bg, secondaryTitle }) =>
   secondaryTitle ? (
      <Title
         opacity={0.5}
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         textAlign={centerAlign ? "center" : "left"}
         marginBottom="1vh"
         extraSmall
      >
         {secondaryTitle}
      </Title>
   ) : null;

export const SlideTitle = ({ children, bg, centerAlign }) => {
   return (
      <Title
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         fontSize={fontSizes.H2}
         fontWeight={fontWeights.BOLD}
         textAlign={centerAlign ? "center" : "left"}
         marginBottom="1vh"
         small
      >
         {children}
      </Title>
   );
};

export const FillerNavBar = styled.div`
   min-width: ${(props) => props.desktopNavBarWidth || "80"}px;
   height: 100px;

   @media (orientation: portrait) {
      min-height: ${(props) => props.mobileNavBarHeight || 45}px;
      height: unset;
   }

   @media (min-height: 300px) and (max-height: 800px) and (min-width: 811px) and (max-width: 950px) {
      scale: 0.5;
   }
`;
