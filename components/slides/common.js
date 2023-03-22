import styled from "styled-components";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

export const SlideSecondaryTitle = ({
   centerAlign,
   marginBottom,
   bg,
   secondaryTitle,
   fontSize,
}) =>
   secondaryTitle ? (
      <Title
         opacity={0.5}
         fontSize={fontSize || fontSizes.MEDIUM}
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         textAlign={centerAlign ? "center" : "left"}
         marginBottom={marginBottom}
         level={3}
      >
         {secondaryTitle}
      </Title>
   ) : null;

export const SlideTitle = ({
   children,
   bg,
   marginBottom,
   fontWeight,
   fontSize,
   centerAlign,
}) => {
   return (
      <Title
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         fontSize={fontSize || fontSizes.LARGE}
         fontWeight={fontWeight || fontWeights.BOLD}
         textAlign={centerAlign ? "center" : "left"}
         marginBottom={marginBottom}
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
