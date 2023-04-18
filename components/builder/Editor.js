import React from "react";
import Link from "next/link";
import { colors } from "utils/colors";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { Flex } from "components/StyledElements";
import {
   SLIDE_SCHEMA,
   SLIDE_UI_SCHEMA,
   PAGE_DETAILS_SCHEMA,
   widgets,
} from "./schema";

const ButtonContainer = styled.div`
   display: flex;
   gap: 10px;
   justify-content: flex-start;
`;
const StyledButton = styled.button`
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

const Editor = ({
   tabIndex,
   setTabIndex,
   setPageDetails,
   setSlides,
   addNewSlide,
   pageDetails,
   slides,
   onSubmit,
}) => {
   const onPageDetailsFormChange = (data) => {
      setPageDetails(data.formData);
   };
   return (
      <Flex flex="1" style={{ overflow: "scroll" }}>
         <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
         >
            <TabList
               style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: colors.DARK_LAVENDER,
                  color: colors.WHITE,
                  zIndex: 2,
               }}
            >
               <Tab>Page Details</Tab>
               {slides.map((slide, idx) => (
                  <Tab key={idx}>Slide {idx + 1}</Tab>
               ))}
               <Tab onClick={addNewSlide}>+ Add slide</Tab>
            </TabList>
            <TabPanel>
               <Form
                  schema={PAGE_DETAILS_SCHEMA}
                  validator={validator}
                  widgets={widgets}
                  formData={pageDetails}
                  autoComplete={"off"}
                  className="page-details-form"
                  onChange={onPageDetailsFormChange}
               >
                  <ButtonContainer>
                     <StyledButton onClick={addNewSlide}>
                        Add slide
                     </StyledButton>
                  </ButtonContainer>
               </Form>
            </TabPanel>
            {slides.map((slide, idx) => (
               <TabPanel key={idx}>
                  <Form
                     schema={SLIDE_SCHEMA}
                     validator={validator}
                     uiSchema={SLIDE_UI_SCHEMA}
                     formData={slide}
                     autoComplete={"off"}
                     className="slide-form"
                     onSubmit={onSubmit}
                     onChange={(data) => setSlides(idx, data.formData)}
                     // onError={() => console.log("uh oh")}
                  >
                     <ButtonContainer>
                        <StyledButton type="submit" id="submit-btn">
                           Create page
                        </StyledButton>

                        <StyledButton>
                           <Link
                              href={{
                                 pathname: `/${pageDetails.url}`,
                                 query: {
                                    preview: "true",
                                    data: JSON.stringify({
                                       ...pageDetails,
                                       slides,
                                    }),
                                 },
                              }}
                              legacyBehavior
                           >
                              <a target="_blank">Preview</a>
                           </Link>
                        </StyledButton>

                        <StyledButton onClick={addNewSlide}>
                           Add slide
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
