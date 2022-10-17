import React from "react";
import styled from "styled-components/macro";
import Title from "components/text/Title";
import ContentList from "components/text/ContentList";
import bg from "../../assets/purple_bg_triangles.png";

const SlideWrap = styled.div`
  background: url(${bg});
  height: 100%;
  width: 100%;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Slide1 = () => {
  return (
    <SlideWrap>
      <Title
        text="Triangles"
        marginBottom="50px"
      />
      <ContentList
        items={[
          "What is a triangle?",
          "Types of triangles",
          "Properties of triangles",
          "Summary"
        ]}></ContentList>
    </SlideWrap>
  );
};

export default Slide1;
