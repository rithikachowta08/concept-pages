import styled from "styled-components";
import { PropTypes } from "prop-types";

const Img = styled.img`
   opacity: ${(props) => (props.activeIndex === props.index ? "1" : "0")};
   grid-row-start: 1;
   grid-column-start: 1;
   transition: opacity 0.2s;
   width: ${(props) => props.width || "550px"};
   height: ${(props) => props.width || "550px"};

   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: ${(props) => props.smallMobileSize || "200px"};
      height: ${(props) => props.smallMobileSize || "200px"};
   }
   @media only screen and (min-width: 400px) and (max-width: 767px) {
      width: ${(props) => props.mobileSize || "250px"};
      height: ${(props) => props.mobileSize || "250px"};
   }
   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: ${(props) => props.tabletSize || "350px"};
      height: ${(props) => props.tabletSize || "350px"};
   }
   @media only screen and (min-width: 993px) and (max-width: 1442px) {
      width: ${(props) => props.smallDesktopSize || "350px"};
      height: ${(props) => props.smallDesktopSize || "350px"};
   }
   @media only screen and (max-height: 399px) and (min-width: 768px) {
      width: ${(props) => props.mobileSize || "200px"};
      height: ${(props) => props.mobileSize || "200px"};
   }
   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: ${(props) => props.tabletSize || props.mobileSize || "350px"};
      height: ${(props) => props.tabletSize || props.mobileSize || "350px"};
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 900px) {
      width: ${(props) =>
         props.smallDesktopSize || props.tabletSize || "450px"};
      height: ${(props) =>
         props.smallDesktopSize || props.tabletSize || "450px"};
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
   altTexts,
   marginRight,
   activeIndex,
   width,
   defaultSize,
   tabletSize,
   mobileSize,
   smallDesktopSize,
   smallMobileSize,
}) => {
   return (
      <ImgContainer marginRight={marginRight}>
         {images.map((image, index) => (
            <Img
               key={index}
               data-src={image}
               index={index}
               width={width}
               activeIndex={activeIndex}
               mobileSize={mobileSize}
               defaultSize={defaultSize}
               tabletSize={tabletSize}
               smallDesktopSize={smallDesktopSize}
               smallMobileSize={smallMobileSize}
               alt={altTexts[index] || "image"}
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
   altTexts: [],
};

export default TransitionImage;
