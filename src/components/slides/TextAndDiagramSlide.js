import { PropTypes } from "prop-types";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

const TextAndDiagramSlide = ({ title, bg = "LIGHT", gap, secondaryTitle, children, diagram }) => {
  const deviceType = useDeviceType();
  return (
    <SlideWrap bg={bg}>
      <Flex
        height="100%"
        direction={deviceType === DEVICE_TYPES.MOBILE ? "column" : "row"}
        gap={deviceType === DEVICE_TYPES.MOBILE ? gap : "none"}
        justifyContent={"space-between"}
        alignItems="center">
        <LeftWrap>
          {secondaryTitle ? (
            <Title
              opacity={0.5}
              color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
              marginBottom="1vh"
              small>
              {secondaryTitle}
            </Title>
          ) : null}
          <Title
            color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
            fontSize={fontSizes.H2}
            fontWeight={fontWeights.BOLD}
            marginBottom="1vh"
            small>
            {title}
          </Title>
          {children}
        </LeftWrap>
        {diagram}
      </Flex>
    </SlideWrap>
  );
};

TextAndDiagramSlide.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  secondaryTitle: PropTypes.string,
  gap: PropTypes.string,
  diagram: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default TextAndDiagramSlide;
