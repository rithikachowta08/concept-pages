import { PropTypes } from "prop-types";
import styled from "styled-components";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

const IFrame = styled.iframe`
   width: 700px;
   height: 700px;

   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: 250px;
      height: 250px;
   }

   @media only screen and (min-width: 400px) and (max-width: 767px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: 250px;
      height: 250px;
   }

   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 768px) {
      width: 350px;
      height: 350px;
   }
`;

const TextAndAppletSlide = ({
   title,
   bg = "LIGHT",
   isLastSlide,
   mobileLayoutGap = "30px",
   downIcon,
   navBar,
   secondaryTitle,
   children,
   appletSrc,
}) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const titleElem = (
      <Title
         color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
         fontSize={fontSizes.H2}
         fontWeight={fontWeights.BOLD}
         textAlign={isMobile ? "center" : "left"}
         marginBottom="1vh"
         small
      >
         {title}
      </Title>
   );
   const secondaryTitleElem = secondaryTitle ? (
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
   const content = isMobile ? (
      <Flex
         width="100%"
         alignItems="center"
         direction={isMobile ? "column-reverse" : "row"}
      >
         <div>{children}</div>
         <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
      </Flex>
   ) : (
      <>
         <LeftWrap>
            {secondaryTitleElem}
            {titleElem}
            {children}
         </LeftWrap>
         <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
      </>
   );
   return (
      <SlideWrap
         bg={bg}
         isLastSlide={isLastSlide}
         padding={isMobile ? "0 0 20px 0" : "20px"}
      >
         <Flex
            alignItems="center"
            justifyContent={isMobile ? "flex-start" : "center"}
            height={isMobile ? "70%" : "auto"}
            width="100%"
            gap={isMobile ? "30px" : "60px"}
            direction={isMobile ? "column" : "row"}
         >
            {navBar}
            <Flex
               height="100%"
               padding="0 20px"
               direction={isMobile ? "column" : "row"}
               gap={isMobile ? mobileLayoutGap : "10px"}
               justifyContent={isMobile ? "flex-start" : "space-evenly"}
               flex={2}
               alignItems="center"
            >
               {isMobile ? (
                  <Flex direction="column" alignItems="center">
                     {secondaryTitleElem}
                     {titleElem}
                  </Flex>
               ) : null}
               {content}
            </Flex>
         </Flex>
         {downIcon}
      </SlideWrap>
   );
};

TextAndAppletSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
   secondaryTitle: PropTypes.string,
   gap: PropTypes.string,
   appletSrc: PropTypes.string.isRequired,
   children: PropTypes.node,
};

export default TextAndAppletSlide;
