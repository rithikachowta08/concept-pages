import styled from "styled-components";
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

export const FillerNavBar = styled.div`
   min-width: ${(props) => (props.isMobile ? "100%" : "80px")};
   height: 400px;
   @media (min-width: 200px) and (max-width: 767px) {
      min-height: 45px;
      height: unset;
   }

   @media (min-width: 768px) and (max-width: 992px) {
      scale: 0.8;
   }

   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      scale: 0.8;
   }
`;
