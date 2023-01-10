import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

import { Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/10.svg";
const image_2 = "assets/area-of-sector-of-a-circle/11.svg";
const image_3 = "assets/area-of-sector-of-a-circle/12.svg";
const image_4 = "assets/area-of-sector-of-a-circle/13.svg";

const Slide3 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Types of Sector"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Diagram of circle showing different points on its circumference",
                  "Diagram of a circle highlighting minor sector",
                  "Diagram of a circle highlighting major sector",
                  "Diagram of a circle highlighting semicircular sector",
               ]}
               activeIndex={activeIndex}
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph>
            The sectors of a circle are classified based on the degree measure
            of the sector.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Minor sector
            </TextSpanBg>{" "}
            (OACB) : A sector of a circle measuring less than 180°.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Major sector
            </TextSpanBg>{" "}
            (OADB) : A sector of a circle measuring greater than 180°.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(3)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Semicircular sector
            </TextSpanBg>{" "}
            (OPDR) : A sector of a circle measuring equal to 180°.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
