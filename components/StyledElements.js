import styled from "styled-components";
const lightBg = "assets/white_bg.webp";
const darkBg = "assets/purple_bg.webp";

const bgToImageMap = {
   LIGHT: lightBg,
   DARK: darkBg,
};

const bgToBgColorMap = {
   LIGHT: "#FCFCFC",
   DARK: "#3E3283",
};

const bgToBgColorMap = {
   LIGHT: "#FCFCFC",
   DARK: "#3E3283",
};

export const SlideWrap = styled.div`
   background: url(${(props) => (props.bg ? bgToImageMap[props.bg] : "none")});
   background-color: ${(props) => bgToBgColorMap[props.bg] || props.bgColor};
   height: 100%;
   width: 100%;
   padding: ${(props) => props.padding};
   gap: ${(props) => props.gap};
   display: flex;
   flex-direction: column;
   justify-content: ${(props) => props.justifyContent || "center"};
   box-sizing: border-box;
   background-size: cover;
   background-repeat: no-repeat;
   align-items: center;

   ${(props) =>
      props.hideFiller
         ? ""
         : `&::before {
      content: "D";
      margin: 1px 1px auto 1px;
      visibility: hidden;
      padding: 5px;
      background: #ddd;
   }`}

   @media only screen and (min-width: 200px) and (max-width: 810px) {
      &::before {
         display: none;
      }
   }
`;

export const TitleSlideWrap = styled.div`
   background: url(${(props) => (props.bg ? bgToImageMap[props.bg] : "none")});
   background-color: ${(props) => bgToBgColorMap[props.bg]};
   padding-bottom: 5vh;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: ${(props) => props.justifyContent || "center"};
   box-sizing: border-box;
   background-size: cover;
   background-repeat: no-repeat;
   align-items: ${(props) => props.alignItems};

   &::before {
      content: "D";
      margin: 1px 1px auto 1px;
      visibility: hidden;
      padding: 5px;
      background: #ddd;
   }
`;

export const LeftWrap = styled.div`
   min-width: 20%;
   margin-left: 60px;
   margin-right: ${(props) => props.marginRight};
   width: 40%;
`;

export const RightWrap = styled.div`
   flex: 1;
   text-align: center;
`;

export const Flex = styled.div`
   display: flex;
   flex-direction: ${(props) => props.direction || "row"};
   width: ${(props) => props.width};
   max-width: ${(props) => props.maxWidth};
   height: ${(props) => props.height};
   gap: ${(props) => props.gap};
   flex: ${(props) => props.flex};
   padding: ${(props) => props.padding};
   color: ${(props) => props.color};
   background-color: ${(props) => props.bgColor};
   border-radius: ${(props) => props.borderRadius};
   position: ${(props) => props.position};
   left: ${(props) => props.left};
   bottom: ${(props) => props.bottom};
   transform: ${(props) => props.transform};
   justify-content: ${(props) => props.justifyContent};
   align-items: ${(props) => props.alignItems};
   align-self: ${(props) => props.alignSelf};
   flex-flow: ${(props) => props.flexFlow};
   flex-grow: ${(props) => props.flexGrow};
   cursor: ${(props) => props.cursor};
   margin: ${(props) => props.margin};
   margin-bottom: ${(props) => props.marginBottom};
   margin-top: ${(props) => props.marginTop};
   margin-right: ${(props) => props.marginRight};
   line-height: ${(props) => props.lineHeight};
`;

export const StyledImg = styled.img`
   margin-right: ${(props) => props.marginRight || "0"};
   margin-bottom: ${(props) => props.marginBottom || "0"};
   align-self: ${(props) => props.alignSelf || "center"};
   transform: ${(props) => props.transform || "none"};
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
      width: ${(props) => props.mobileSize || "250px"};
      height: ${(props) => props.mobileSize || "250px"};
   }
   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: ${(props) => props.tabletSize || props.mobileSize || "350px"};
      height: ${(props) => props.tabletSize || props.mobileSize || "350px"};
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 768px) {
      width: ${(props) =>
         props.smallDesktopSize || props.tabletSize || "450px"};
      height: ${(props) =>
         props.smallDesktopSize || props.tabletSize || "450px"};
   }
`;
export const ModalImg = styled.img`
   align-self: ${(props) => props.alignSelf || "center"};
   width: 350px;
   height: 350px;
   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: 200px;
      height: 200px;
   }
   @media only screen and (min-width: 400px) and (max-width: 767px) {
      width: 250px;
      height: 250px;
   }
   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: 300px;
      height: 300px;
   }
   @media only screen and (max-height: 399px) and (min-width: 768px) {
      width: 200px;
      height: 200px;
   }
   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 768px) {
      width: 250px;
      height: 250px;
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 768px) {
      width: 300px;
      height: 300px;
   }
`;

export const Icon = styled.img`
   width: ${(props) => props.width || "15px"};
   height: ${(props) => props.height || props.width || "15px"};
   cursor: pointer;
   margin-right: ${(props) => props.marginRight};
   align-self: ${(props) => props.alignSelf};
`;

export const PageWrap = styled.div`
   height: 100%;
   width: 100%;
`;

export const LeftAlignDiv = styled.div`
   align-self: flex-start;
   width: 100%;
`;

export const Video = styled.video`
   display: block;
   width: 100%;
   height: ${(props) => (props.isRotated ? "100vh" : "75vh")};

   @media only screen and (min-width: 200px) and (max-width: 767px) {
      height: ${(props) => (props.isRotated ? "100vh" : "60vh")};
   }
   position: ${(props) => (props.isRotated ? "absolute" : "static")};
   transform: ${(props) =>
      props.isRotated ? "rotate(90deg) !important" : "none"};
   transform-origin: ${(props) => (props.isRotated ? "bottom left" : "none")};
   margin-top: ${(props) => (props.isRotated ? "-100vw" : "none")};
   object-fit: ${(props) => (props.isRotated ? "cover" : "none")};

   z-index: 4;
   visibility: visible;
`;
