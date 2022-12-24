import { PropTypes } from "prop-types";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SlideWrap, Flex } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Paragraph, Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";
import { FillerNavBar } from "./common";

const IFrame = styled.iframe`
   width: 700px;
   height: 700px;
   border-radius: 20px;

   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: 150px;
      height: 150px;
   }

   @media only screen and (min-width: 400px) and (max-width: 767px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: 450px;
      height: 450px;
   }

   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 768px) {
      width: 450px;
      height: 450px;
   }
`;

const AppletSlide = ({
   title,
   downIcon,
   description,
   isLastSlide,
   bg = "LIGHT",
   appletSrc = "./applets/triangle.html",
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <SlideWrap
         bg={bg}
         ref={ref}
         isLastSlide={isLastSlide}
         padding={isMobile ? "0 0 20px 0" : "20px"}
      >
         <Flex
            alignItems="center"
            width="100%"
            height="100%"
            justifyContent={isMobile ? "flex-start" : "center"}
            gap={isMobile ? "30px" : "60px"}
            direction={isMobile ? "column" : "row"}
         >
            <FillerNavBar isMobile={isMobile} />
            <Flex
               gap={isMobile ? "30px" : "0"}
               margin={isMobile ? "auto 0" : "0"}
               justifyContent={isMobile ? "flex-start" : "space-evenly"}
               flex="2"
               alignItems="center"
            >
               {title ? (
                  <Title
                     color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                     fontSize={fontSizes.H2}
                     fontWeight={fontWeights.BOLD}
                     padding="5%"
                     small
                  >
                     {title}
                  </Title>
               ) : null}
               <Flex
                  direction={isMobile ? "column-reverse" : "row"}
                  width="100%"
                  height="100%"
                  justifyContent="space-evenly"
                  alignItems="center"
               >
                  {description && (
                     <Paragraph
                        color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                     >
                        {description}
                     </Paragraph>
                  )}
                  <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
               </Flex>
            </Flex>
         </Flex>
         {downIcon}
      </SlideWrap>
   );
};

AppletSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
   appletSrc: PropTypes.string.isRequired,
};

export default AppletSlide;
