import React from "react";
import { PropTypes } from "prop-types";
import { SlideSecondaryTitle, SlideTitle } from "./common";
import {
   SlideWrap,
   Flex,
   LeftWrap,
   RightWrap,
} from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";

const TextAndDiagramSlide = ({
   title,
   bg = "LIGHT",
   isLastSlide,
   secondaryTitle,
   children,
   downIcon,
   navBar,
   diagram,
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
               {diagram}
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
            <LeftWrap>
               <div>
                  <SlideSecondaryTitle
                     bg={bg}
                     secondaryTitle={secondaryTitle}
                  />
                  <SlideTitle bg={bg}>{title}</SlideTitle>
               </div>
               {children}
            </LeftWrap>
            <RightWrap>{diagram}</RightWrap>
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
