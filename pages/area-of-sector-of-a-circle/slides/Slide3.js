import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/ActivitySlide";
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
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Minor sector (OACB)
            </TextSpanBg>{" "}
            : A sector of a circle measuring less than 180°.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Major sector (OADB)
            </TextSpanBg>{" "}
            : A sector of a circle measuring greater than 180°.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(3)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Semicircular sector (OPDR)
            </TextSpanBg>{" "}
            : A sector of a circle measuring equal to 180°.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
