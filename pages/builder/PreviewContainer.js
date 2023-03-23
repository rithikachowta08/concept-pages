import React from "react";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import styled from "styled-components";
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Slide = dynamic(() => import("../[dynamic-page]/Slide.js"), {
   ssr: false,
});
const ErrorBoundary = dynamic(() => import("./ErrorBoundary.js"), {
   ssr: false,
});

const Div = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid black;
   overflow: scroll;
   flex: 1;
`;

const EmptyPreview = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   overflow: scroll;
   flex: 1;
`;

const SlideWrap = styled.div`
   height: 50%;
   zoom: 0.6;
   transform: scale(0.9);
`;

const PreviewContainer = ({ json }) => {
   return json && json.slides.length ? (
      <Div>
         {json.slides.map((slide, idx) => (
            <SlideWrap key={idx}>
               <ErrorBoundary>
                  <Slide data={slide} json={json} isPreview />
               </ErrorBoundary>
            </SlideWrap>
         ))}
      </Div>
   ) : (
      <EmptyPreview>
         <Title color={colors.BLACK} level={3}>
            Nothing to preview
         </Title>
      </EmptyPreview>
   );
};

export default PreviewContainer;
