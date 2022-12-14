import styled from "styled-components";
import { PropTypes } from "prop-types";

const Img = styled.img`
   opacity: ${(props) => (props.activeIndex === props.index ? "1" : "0")};
   grid-row-start: 1;
   grid-column-start: 1;
   transition: opacity 0.2s;
   width: ${(props) => props.width || "550px"};
   height: ${(props) => props.width || "550px"};

   @media only screen and (min-width: 200px) and (max-width: 767px) {
      width: ${(props) => props.mobileSize || "250px"};
      height: ${(props) => props.mobileSize || "250px"};
   }
   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: ${(props) => props.tabletSize || "350px"};
      height: ${(props) => props.tabletSize || "350px"};
   }
   @media only screen and (max-height: 399px) and (min-width: 768px) {
      width: ${(props) => props.mobileSize || "250px"};
      height: ${(props) => props.mobileSize || "250px"};
   }
   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: ${(props) => props.mobileSize || "350px"};
      height: ${(props) => props.mobileSize || "350px"};
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 700px) {
      width: ${(props) => props.tabletSize || "450px"};
      height: ${(props) => props.tabletSize || "450px"};
   }
`;

const ImgContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   position: relative;
   bottom: ${(props) => props.bottomOffset || "0"};
   margin-right: ${(props) => props.marginRight};
   justify-items: center;
`;

const TransitionImage = ({
   images,
   marginRight,
   activeIndex,
   width,
   defaultSize,
   tabletSize,
   mobileSize,
}) => {
   return (
      <ImgContainer marginRight={marginRight}>
         {images.map((image, index) => (
            <Img
               key={index}
               src={image}
               index={index}
               width={width}
               activeIndex={activeIndex}
               mobileSize={mobileSize}
               defaultSize={defaultSize}
               tabletSize={tabletSize}
               alt="image"
            ></Img>
         ))}
      </ImgContainer>
   );
};

TransitionImage.propTypes = {
   images: PropTypes.array.isRequired,
   activeIndex: PropTypes.number,
   mobileSize: PropTypes.string,
   marginRight: PropTypes.string,
};

TransitionImage.defaultProps = {
   activeIndex: 0,
   bottomOffset: "0px",
};

export default TransitionImage;
