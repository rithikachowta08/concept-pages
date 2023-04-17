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
   colorTheme = "BUBBLEGUM",
   isPreview,
   secondaryTitle,
   children,
   downIcon,
   diagram,
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
         ref.current.parentNode.classList.add(colorTheme);
      }
   }, [bg, ref.current]);
   return (
      <div style={{ height: "100%", width: "100%" }} ref={ref}>
         <DesktopComponent>
            <SlideWrap
               bg={bg}
               colorTheme={colorTheme}
               padding={"20px 30px"}
               hideFiller={isPreview}
            >
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
                  maxHeight="30%"
               >
                  <FillerNavBar />
                  <LeftWrap>
                     <div>
                        <SlideSecondaryTitle
                           bg={bg}
                           marginBottom="15px"
                           secondaryTitle={secondaryTitle}
                        />
                        <SlideTitle marginBottom="30px" bg={bg}>
                           {title}
                        </SlideTitle>
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
               colorTheme={colorTheme}
               padding="0 0 10px 0"
               gap="10px"
               justifyContent="space-between"
               hideFiller={isPreview}
            >
               {/* Navbar and title */}
               <Flex direction="column" gap="2vh">
                  <FillerNavBar
                     mobileNavBarHeight={global.mobileNavBarHeight}
                  />
                  <div>
                     <SlideSecondaryTitle
                        bg={bg}
                        marginBottom="10px"
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
                  padding="0 30px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  flex="1"
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
      </div>
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
