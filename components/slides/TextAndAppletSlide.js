import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
   SlideWrap,
   Flex,
   LeftWrap,
   RightWrap,
} from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { SlideSecondaryTitle, SlideTitle } from "./common";

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
   downIcon,
   navBar,
   secondaryTitle,
   children,
   appletSrc,
}) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   if (isMobile) {
      return (
         <SlideWrap
            bg={bg}
            padding="0 0 10px 0"
            gap="10px"
            justifyContent="space-between"
            isLastSlide={isLastSlide}
         >
            {/* NavBar */}
            {navBar}
            {/* Body */}
            <Flex
               direction="column"
               padding="0 20px"
               justifyContent="space-between"
               alignItems="center"
            >
               <div>
                  <SlideSecondaryTitle
                     bg={bg}
                     secondaryTitle={secondaryTitle}
                     isMobile
                  />
                  <SlideTitle bg={bg} isMobile>
                     {title}
                  </SlideTitle>
               </div>
               <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
               {children}
            </Flex>
            {/* DownIcon */}
            {React.cloneElement(downIcon, { noMargin: true })}
         </SlideWrap>
      );
   }
   return (
      <SlideWrap bg={bg} padding={"20px 30px"}>
         <Flex alignItems="center" justifyContent="flex-start" width="100%">
            {navBar}
            <LeftWrap marginRight="20px">
               <div>
                  <SlideSecondaryTitle
                     bg={bg}
                     secondaryTitle={secondaryTitle}
                  />
                  <SlideTitle bg={bg}>{title}</SlideTitle>
               </div>
               {children}
            </LeftWrap>
            <RightWrap>
               <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
            </RightWrap>
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
