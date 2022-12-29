import { PropTypes } from "prop-types";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";
import { FillerNavBar } from "./common";

const TextAndDiagramSlide = ({
   title,
   bg = "LIGHT",
   mobileLayoutGap = "0px",
   isLastSlide,
   secondaryTitle,
   children,
   downIcon,
   navBar,
   diagram,
}) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
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
   const content = isMobile ? (
      <Flex
         width="100%"
         alignItems="center"
         direction={isMobile ? "column-reverse" : "row"}
      >
         <div>{children}</div>
         {diagram}
      </Flex>
   ) : (
      <>
         <LeftWrap>
            {secondaryTitleElem}
            {titleElem}
            {children}
         </LeftWrap>
         {diagram}
      </>
   );
   return (
      <SlideWrap
         bg={bg}
         padding={isMobile ? "0 0 20px 0" : "20px"}
         isLastSlide={isLastSlide}
      >
         <Flex
            alignItems="center"
            justifyContent={isMobile ? "flex-start" : "center"}
            height={isMobile ? "100%" : "auto"}
            width="100%"
            gap={isMobile ? "10px" : "60px"}
            direction={isMobile ? "column" : "row"}
         >
            <FillerNavBar />
            <Flex
               padding={isMobile ? "0 20px" : "0"}
               direction={isMobile ? "column" : "row"}
               gap={isMobile ? mobileLayoutGap : "10px"}
               margin={isMobile ? "auto 0" : "0"}
               justifyContent="space-evenly"
               flex={2}
               width="100%"
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

TextAndDiagramSlide.propTypes = {
   title: PropTypes.string.isRequired,
   bg: PropTypes.string,
   secondaryTitle: PropTypes.string,
   diagram: PropTypes.node.isRequired,
   children: PropTypes.node.isRequired,
};

export default TextAndDiagramSlide;
