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
import { Media } from "utils/media";

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
         <Media lessThan="md">
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
                     isMobile
                     mobileNavBarHeight={global && global.mobileNavBarHeight}
                  />
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
               {React.cloneElement(downIcon, { noMargin: true })}
            </SlideWrap>
         </Media>
         <Media greaterThanOrEqual="md">
            <SlideWrap bg={bg} padding={"20px 30px"}>
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
               >
                  <FillerNavBar />
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
         </Media>
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
