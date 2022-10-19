import styled from "styled-components/macro";

export const SlideWrap = styled.div`
  background: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  padding-left: ${(props) => props.paddingLeft};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: ${(props) => props.alignItems};
`;

export const LeftWrap = styled.div`
  width: 40%;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width};
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
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: ${(props) => props.marginRight};
`;

export const PageWrap = styled.div`
  height: 100%;
  width: 100%;
`;
