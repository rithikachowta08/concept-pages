import styled from "styled-components/macro";
import { PropTypes } from "prop-types";

const Img = styled.img`
  opacity: ${(props) => (props.activeIndex === props.index ? "1" : "0")};
  position: absolute;
  transition: opacity 0.2s;
`;

const ImgContainer = styled.div`
  position: relative;
  bottom: ${(props) => props.bottomOffset || "0"};
`;

const TransitionImage = ({ images, bottomOffset, activeIndex }) => {
  return (
    <ImgContainer bottomOffset={bottomOffset}>
      {images.map((image, index) => (
        <Img
          key={index}
          src={image}
          index={index}
          activeIndex={activeIndex}
          alt="image"></Img>
      ))}
    </ImgContainer>
  );
};

TransitionImage.propTypes = {
  images: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  bottomOffset: PropTypes.string
};

TransitionImage.defaultProps = {
  activeIndex: 0,
  bottomOffset: "0px"
};

export default TransitionImage;
