import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Title } from "components/text";
import React from "react";
import { colors } from "utils/colors";
import bg from "assets/white_bg.png";

const Slide6 = () => {
  return (
    <SlideWrap
      paddingLeft={"200px"}
      bg={bg}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            opacity={1}
            marginBottom="16px"
            color={colors.BLACK}
            small>
            Move the slider to create a triangle of area 15 unit2.
          </Title>
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide6;
