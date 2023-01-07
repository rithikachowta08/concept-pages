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
         level={3}
      >
         {secondaryTitle}
      </Title>
   ) : null;

export const SlideTitle = ({ children, bg, centerAlign }) => {
   return (
      <Title
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         fontSize={fontSizes.LARGE}
         fontWeight={fontWeights.BOLD}
         textAlign={centerAlign ? "center" : "left"}
         marginBottom="1vh"
         level={2}
      >
         {children}
      </Title>
   );
};

export const FillerNavBar = styled.div`
   min-width: 76px;
   height: 100px;

   // Low res desktop and tablet landscape
   @media (min-width: 821px) and (max-width: 1224px) {
      min-width: 52px;
   }

   // Small height desktop
   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      min-width: 52px;
   }

   // Mobile landscape
   @media (min-height: 300px) and (max-height: 500px) and (max-width: 950px) {
      min-width: 42px;
   }

   @media (orientation: portrait) {
      min-height: ${(props) => props.mobileNavBarHeight || 45}px;
      height: unset;
   }

   @media (min-height: 300px) and (max-height: 800px) and (min-width: 811px) and (max-width: 950px) {
      scale: 0.5;
   }
`;
