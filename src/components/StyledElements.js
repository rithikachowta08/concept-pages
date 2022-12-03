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
  height: 100%;
  width: 100%;
  padding-left: ${(props) => props.paddingLeft};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: ${(props) => props.alignItems};
`;

export const LeftWrap = styled.div`
  width: ${(props) => props.width || "50%"};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width};
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
  width: 100vw;
  height: 75vh;
`;
