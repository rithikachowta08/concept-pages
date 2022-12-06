import { PropTypes } from "prop-types";
import styled from "styled-components/macro";
import { SlideWrap, Flex } from "components/StyledElements";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { Title } from "components/text";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";

const IFrame = styled.iframe`
  width: 750px;
  height: 700px;
  @media (max-height: 600px) {
    width: 100px;
    height: 150px;
  }
  @media (max-height: 700px) {
    width: 200px;
    height: 250px;
  }
  @media (max-height: 900px) {
    width: 300px;
    height: 350px;
  }
`;

const AppletSlide = ({ title, bg = "LIGHT", gap, appletSrc = "./triangle.html" }) => {
  const deviceType = useDeviceType();
  return (
    <SlideWrap bg={bg}>
      <Flex
        height="100%"
        direction={deviceType === DEVICE_TYPES.MOBILE ? "column" : "row"}
        gap={deviceType === DEVICE_TYPES.MOBILE ? "2vh" : "none"}
        justifyContent={"flex-start"}
        alignItems="center">
        <Title
          color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
          fontSize={fontSizes.H2}
          fontWeight={fontWeights.BOLD}
          padding="5%"
          small>
          {title}
        </Title>
        <IFrame
          src={appletSrc}
          allowFullScreen
          frameBorder="0"
        />
      </Flex>
    </SlideWrap>
  );
};

AppletSlide.propTypes = {
  title: PropTypes.string,
  bg: PropTypes.string,
  gap: PropTypes.string,
  appletSrc: PropTypes.string.isRequired
};

export default AppletSlide;
