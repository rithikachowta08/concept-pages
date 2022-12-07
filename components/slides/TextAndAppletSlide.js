import { PropTypes } from "prop-types";
import styled from "styled-components";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

const IFrame = styled.iframe`
   width: 750px;
   height: 700px;
   @media (max-height: 600px) {
      width: 100px;
      height: 150px;
   }
   @media (max-height: 700px) {
      width: 200px;
      height: 250px;
   }
   @media (max-height: 900px) {
      width: 300px;
      height: 350px;
   }
`;

const TextAndAppletSlide = ({
   title,
   bg = "LIGHT",
   gap,
   secondaryTitle,
   children,
   appletSrc,
}) => {
   const deviceType = useDeviceType();
   return (
      <SlideWrap bg={bg}>
         <Flex
            height="100%"
            direction={deviceType === DEVICE_TYPES.MOBILE ? "column" : "row"}
            gap={deviceType === DEVICE_TYPES.MOBILE ? gap : "none"}
            justifyContent={"space-between"}
            alignItems="center"
         >
            <LeftWrap>
               {secondaryTitle ? (
                  <Title
                     opacity={0.5}
                     color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                     marginBottom="1vh"
                     small
                  >
                     {secondaryTitle}
                  </Title>
               ) : null}
               <Title
                  color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                  fontSize={fontSizes.H2}
                  fontWeight={fontWeights.BOLD}
                  marginBottom="1vh"
                  small
               >
                  {title}
               </Title>
               {children}
            </LeftWrap>
            <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
         </Flex>
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
