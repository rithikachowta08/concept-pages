import styled from "styled-components/macro";
import lightBg from "assets/white_bg.webp";
import darkBg from "assets/purple_bg.webp";
import darkWithTrianglesBg from "assets/purple_bg_triangles.webp";

const bgToImageMap = {
  LIGHT: lightBg,
  DARK: darkBg,
  DARK_PATTERNED: darkWithTrianglesBg
};

export const SlideWrap = styled.div`
  background: url(${(props) => (props.bg ? bgToImageMap[props.bg] : "none")});
  background-color: ${(props) => props.bgColor};
  padding-left: ${(props) => props.paddingLeft || "15vw"};
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
  align-items: ${(props) => props.alignItems};

  @media only screen and (min-width: 200px) and (max-width: 768px) {
    padding-top: 7%;
    padding-left: 0;
  }
`;

export const LeftWrap = styled.div`
  width: 50%;
  @media only screen and (min-width: 200px) and (max-width: 768px) {
    width: 100%;
    padding: 5%;
    height: 45%;
    box-sizing: border-box;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width};
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
  cursor: ${(props) => props.cursor};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
`;

export const StyledImg = styled.img`
  margin-right: ${(props) => props.marginRight || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  align-self: ${(props) => props.alignSelf || "center"};
  transform: ${(props) => props.transform || "none"};
  width: ${(props) => props.width || "auto"};
  @media only screen and (min-width: 200px) and (max-width: 768px) {
    scale: 0.5;
    transform: translateY(-60%);
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    scale: 0.75;
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

export const Video = styled.video`
  display: block;
  width: 100vw;
  height: ${(props) => (props.isRotated ? "100vh" : "75vh")};

  @media only screen and (min-width: 200px) and (max-width: 768px) {
    height: ${(props) => (props.isRotated ? "100vh" : "60vh")};
  }
  position: ${(props) => (props.isRotated ? "absolute" : "static")};
  transform: ${(props) => (props.isRotated ? "rotate(90deg) !important" : "none")};
  transform-origin: ${(props) => (props.isRotated ? "bottom left" : "none")};
  margin-top: ${(props) => (props.isRotated ? "-100vw" : "none")};
  object-fit: ${(props) => (props.isRotated ? "cover" : "none")};

  z-index: 4;
  visibility: visible;
`;
