import styled from "styled-components/macro";
import { PropTypes } from "prop-types";

const Img = styled.img`
  opacity: ${(props) => (props.activeIndex === props.index ? "1" : "0")};
  grid-row-start: 1;
  grid-column-start: 1;
  transition: opacity 0.2s;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  bottom: ${(props) => props.bottomOffset || "0"};
  margin-right: ${(props) => props.marginRight};
`;

const TransitionImage = ({ images, bottomOffset, marginRight, activeIndex }) => {
  return (
    <ImgContainer
      bottomOffset={bottomOffset}
      marginRight={marginRight}>
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
  bottomOffset: PropTypes.string,
  marginRight: PropTypes.string
};

TransitionImage.defaultProps = {
  activeIndex: 0,
  bottomOffset: "0px"
};

export default TransitionImage;
