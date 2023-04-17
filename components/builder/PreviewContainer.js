import React from "react";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import styled from "styled-components";
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Slide = dynamic(() => import("../dynamic-page/Slide.js"));
const ErrorBoundary = dynamic(() => import("./ErrorBoundary.js"));

const Div = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid black;
   overflow: scroll;
   display: flex;
   flex-direction: column;
   align-items: stretch;
   flex: 1;
`;

const EmptyPreview = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   justify-content: center;
   border: 1px solid black;
   overflow: scroll;
   flex: 1;
`;

const SlideWrap = styled.div`
   height: 50%;
   zoom: 0.6;
   transform: scale(0.9);
   min-height: 800px;
   border: ${(props) => (props.isSelected ? `3px solid #1976d2` : "none")};
`;

const AddNewSlideButton = styled.button`
   background-color: ${colors.DARK_LAVENDER};
   color: white;
   padding: 10px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
   border: none;
   width: fit-content;
   align-self: center;
   cursor: pointer;
`;

const PreviewContainer = ({ json, tabIndex, addNewSlide, onPreviewClick }) => {
   return json && json.slides.length ? (
      <Div>
         {json.slides.map((slide, idx) => (
            <SlideWrap
               key={idx}
               id={idx}
               isSelected={tabIndex - 1 === idx}
               onClick={onPreviewClick}
            >
               <ErrorBoundary data={slide}>
                  <Slide
                     data={slide}
                     json={json}
                     colorTheme={json.colorTheme}
                     isPreview
                  />
               </ErrorBoundary>
            </SlideWrap>
         ))}
         <AddNewSlideButton onClick={addNewSlide}>Add slide</AddNewSlideButton>
      </Div>
   ) : (
      <EmptyPreview>
         <Title color={colors.BLACK} level={3}>
            Add slides to preview
         </Title>
         <AddNewSlideButton onClick={addNewSlide}>
            Add new slide
         </AddNewSlideButton>
      </EmptyPreview>
   );
};

export default PreviewContainer;
