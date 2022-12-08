import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SlideWrap paddingLeft={"160px"} bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem"
          >
            Derivation
          </Title>
          <Paragraph color={colors.BLACK} marginBottom="50px">
            Apply the Sine formula in the{" "}
            <TextSpan
              bgColor={colors.RED}
              color={colors.WHITE}
              hoverBgColor={colors.DARK_BLUE}
              onHover={() => {
                setActiveIndex(1);
              }}
              onHoverOut={() => {
                setActiveIndex(0);
              }}
            >
              triangle
            </TextSpan>
            .
            <br />
            <TextSpan>
              <MathElement htmlString={"Sin \\ A = \\frac{h}{b}"} />
            </TextSpan>
            <br />
            <TextSpan>
              <MathElement htmlString={"h = b.Sin \\ A"} />
            </TextSpan>
            <br />
          </Paragraph>
          <Paragraph>
            Area of triangle (<MathElement htmlString={"\\Delta"} />
            ABC) ={" "}
            <MathElement
              htmlString={"\\frac{1}{2} \\times Base \\times Height"}
            />
          </Paragraph>
          <Paragraph marginBottom={"20px"}>
            <MathElement htmlString={"A = \\frac{1}{2}\\times c\\times h)"} />
          </Paragraph>
          <Paragraph marginBottom={"20px"}>
            <MathElement
              htmlString={"A = \\frac{1}{2}\\times c\\times b\\ Sin A)"}
            />
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
          >
            Area =
            <MathElement htmlString={"\\frac{1}{2}\\ bc\\ Sin\\ A"} />
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <TransitionImage
            images={[image_1, image_2]}
            activeIndex={activeIndex}
            bottomOffset="65px"
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide20;
