import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Slide = dynamic(() => import("../[dynamic-page]/Slide.js"));

const Div = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid black;
   flex: 1;
`;
const PreviewContainer = ({ json }) => {
   return (
      <Div>
         {json.slides.map((slide, idx) => (
            <div
               key={idx}
               style={{
                  height: "50%",
                  zoom: "0.6",
                  transform: "scale(0.9)",
               }}
            >
               <Slide data={slide} json={json} isPreview />
            </div>
         ))}
      </Div>
   );
};

export default PreviewContainer;
