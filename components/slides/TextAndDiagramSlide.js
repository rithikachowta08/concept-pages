import React, { useRef, useEffect } from "react";
import { PropTypes } from "prop-types";
import { FillerNavBar, SlideSecondaryTitle, SlideTitle } from "./common";
import {
   SlideWrap,
   Flex,
   LeftWrap,
   RightWrap,
   LeftAlignDiv,
} from "components/StyledElements";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";

const TextAndDiagramSlide = ({
   title,
   bg = "LIGHT",
   isLastSlide,
   secondaryTitle,
   children,
   downIcon,
   diagram,
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   return (
      <>
         <DesktopComponent>
            <SlideWrap bg={bg} padding={"20px 30px"}>
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
                  maxHeight="30%"
               >
                  <FillerNavBar
                     desktopNavBarWidth={global.desktopNavBarWidth}
                  />
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
               {downIcon ? React.cloneElement(downIcon) : downIcon}
            </SlideWrap>
         </DesktopComponent>
         <MobileComponent>
            <SlideWrap
               bg={bg}
               ref={ref}
               padding="0 0 10px 0"
               gap="10px"
               justifyContent="space-between"
               isLastSlide={isLastSlide}
            >
               <Flex direction="column" gap="2vh">
                  <FillerNavBar
                     mobileNavBarHeight={global.mobileNavBarHeight}
                  />
                  <div>
                     <SlideSecondaryTitle
                        bg={bg}
                        secondaryTitle={secondaryTitle}
                        centerAlign
                     />
                     <SlideTitle bg={bg} centerAlign>
                        {title}
                     </SlideTitle>
                  </div>
               </Flex>
               {/* Body */}
               <Flex
                  direction="column"
                  padding="0 20px"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
               >
                  {diagram}
                  <LeftAlignDiv>{children}</LeftAlignDiv>
               </Flex>
               {/* DownIcon */}
               {downIcon
                  ? React.cloneElement(downIcon, { noMargin: true })
                  : downIcon}
            </SlideWrap>
         </MobileComponent>
      </>
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
