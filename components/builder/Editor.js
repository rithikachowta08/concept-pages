import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { Flex } from "components/StyledElements";
import { SLIDE_SCHEMA, SLIDE_UI_SCHEMA, PAGE_DETAILS_SCHEMA } from "./schema";

const ButtonContainer = styled.div`
   display: flex;
   gap: 10px;
   justify-content: flex-start;
`;
const StyledButton = styled.button`
   background-color: #1976d2;
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

const Editor = ({
   setPageDetails,
   setSlides,
   addNewSlide,
   pageDetails,
   slides,
}) => {
   const onPageDetailsFormChange = (data) => {
      setPageDetails(data.formData);
   };
   console.log("slides", slides);
   return (
      <Flex flex="1" style={{ overflow: "scroll" }}>
         <Tabs>
            <TabList>
               <Tab>Page Details</Tab>
               {slides.map((slide, idx) => (
                  <Tab key={idx}>Slide {idx + 1}</Tab>
               ))}
            </TabList>
            <TabPanel>
               <Form
                  schema={PAGE_DETAILS_SCHEMA}
                  validator={validator}
                  formData={pageDetails}
                  autoComplete={"off"}
                  className="page-details-form"
                  // onSubmit={() => console.log("clicked submit")}
                  onChange={onPageDetailsFormChange}

                  // onError={() => console.log("uh oh")}
               ></Form>
               <ButtonContainer>
                  <StyledButton onClick={addNewSlide}>
                     Add new slide
                  </StyledButton>
               </ButtonContainer>
            </TabPanel>
            {slides.map((slide, idx) => (
               <TabPanel key={idx}>
                  <Form
                     schema={{
                        title: `Slide ${idx + 1}`,
                        ...SLIDE_SCHEMA,
                     }}
                     validator={validator}
                     uiSchema={SLIDE_UI_SCHEMA}
                     formData={slide}
                     autoComplete={"off"}
                     className="slide-form"
                     onSubmit={() => console.log("clicked submit")}
                     onChange={(data) => setSlides(idx, data.formData)}
                     // onError={() => console.log("uh oh")}
                  >
                     <ButtonContainer>
                        <StyledButton type="submit">Create page</StyledButton>
                        <StyledButton>Preview</StyledButton>
                        <StyledButton onClick={addNewSlide}>
                           Add new slide
                        </StyledButton>
                     </ButtonContainer>
                  </Form>
               </TabPanel>
            ))}
         </Tabs>
      </Flex>
   );
};

export default Editor;
