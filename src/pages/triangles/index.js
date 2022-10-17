import styled from "styled-components/macro";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

const PageWrap = styled.div`
  height: 100%;
  width: 100%;
`;

export const Triangles = () => {
  return (
    <PageWrap>
      <Slide1 />
    </PageWrap>
  );
};
