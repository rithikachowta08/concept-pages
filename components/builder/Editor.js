import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { colors } from "utils/colors";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { Flex, Icon } from "components/StyledElements";
import {
   SLIDE_SCHEMA,
   SLIDE_UI_SCHEMA,
   PAGE_DETAILS_SCHEMA,
   widgets,
} from "./schema_v2";
import {
   SLIDE_SCHEMA as SLIDE_SCHEMA_V1,
   SLIDE_UI_SCHEMA as SLIDE_UI_SCHEMA_V1,
   PAGE_DETAILS_SCHEMA as PAGE_DETAILS_SCHEMA_V1,
   widgets as widgets_V1,
} from "./schema_v1";

const ButtonContainer = styled.div`
   display: flex;
   gap: 10px;
   justify-content: flex-start;
`;
const StyledButton = styled.button`
   background-color: ${colors.DARK_LAVENDER};
   color: white;
   height: 36px;
   padding: 10px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
   border: none;
   width: fit-content;
   align-self: center;
   cursor: pointer;

   &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
   }
`;

const LoadingSpinner = styled.div`
   height: 16px;
   aspect-ratio: 1/1;
   border-radius: 50%;
   margin-right: 8px;
   border-right: 2px solid rgba(255, 255, 255, 0.6);
   border-top: 2px solid transparent;
   border-left: 2px solid transparent;
   border-bottom: 2px solid transparent;
   animation: rotate--spinner 1.6s infinite;

   @keyframes rotate--spinner {
      from {
         transform: rotate(0);
      }
      to {
         transform: rotate(360deg);
      }
   }
`;

const Editor = ({
   tabIndex,
   setTabIndex,
   setPageDetails,
   setSlides,
   addNewSlide,
   deleteSlide,
   pageDetails,
   slides,
   onSubmit,
   isCreatePageLoading,
   isSaveDraftLoading,
}) => {
   const router = useRouter();
   const isEditing =
      router.query.pageId &&
      router.query.pageId !== "NEW" &&
      router.query.pageId !== "IMPORT";
   const isV2 = Boolean(router.query.v2);
   const pageDetailsformRef = React.createRef();
   const slideFormRef = React.createRef();
   const onPageDetailsFormChange = (data) => {
      setPageDetails({ ...data.formData, version: isV2 ? 2 : 1 });
      localStorage.setItem(
         "pageDetails",
         JSON.stringify({ ...data.formData, version: isV2 ? 2 : 1 })
      );
   };

   const onSlidesChange = (idx, data) => {
      const tempSlides = [...slides];
      tempSlides[idx] = data;
      setSlides(tempSlides);
      localStorage.setItem("slides", JSON.stringify(tempSlides));
   };

   function downloadTextFile(text, name) {
      const a = document.createElement("a");
      const type = name.split(".").pop();
      a.href = URL.createObjectURL(
         new Blob([text], { type: `text/${type === "txt" ? "plain" : type}` })
      );
      a.download = name;
      a.click();
   }

   const onClickExport = () => {
      downloadTextFile(
         JSON.stringify({ ...pageDetails, slides }),
         "export.json"
      );
   };

   const tabListHeight =
      typeof document !== undefined &&
      document.querySelector(".react-tabs__tab-list")?.clientHeight;
   return (
      <Flex flex="1" style={{ overflow: "scroll" }}>
         <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
         >
            <TabList
               style={{
                  position: "fixed",
                  top: 0,
                  backgroundColor: colors.DARK_LAVENDER,
                  color: colors.WHITE,
                  zIndex: 2,
               }}
            >
               <Tab>Page Details</Tab>
               {slides.map((slide, idx) => (
                  <Tab key={idx}>
                     <Flex gap="5px" alignItems="center">
                        Slide {idx + 1}
                        <Icon
                           width={tabIndex - 1 === idx ? "13px" : "15px"}
                           padding="3px"
                           borderRadius="50%"
                           background={tabIndex - 1 === idx ? "#aaa" : "none"}
                           src={"assets/cross_icon.svg"}
                           onClick={() => deleteSlide(idx)}
                        />
                     </Flex>
                  </Tab>
               ))}
               <Tab onClick={addNewSlide}>+ Add slide</Tab>
            </TabList>
            <TabPanel
               style={{
                  paddingTop: tabListHeight ? `${tabListHeight}px` : "50px",
               }}
               forceRender
            >
               <Form
                  ref={pageDetailsformRef}
                  schema={isV2 ? PAGE_DETAILS_SCHEMA : PAGE_DETAILS_SCHEMA_V1}
                  validator={validator}
                  widgets={isV2 ? widgets : widgets_V1}
                  formData={pageDetails}
                  autoComplete={"off"}
                  className="page-details-form"
                  onChange={onPageDetailsFormChange}
               >
                  <ButtonContainer>
                     <StyledButton>
                        <Link
                           href={{
                              pathname: `/${pageDetails.url}`,
                              query: {
                                 preview: "true",
                              },
                           }}
                           legacyBehavior
                        >
                           <a target="_blank">Preview</a>
                        </Link>
                     </StyledButton>
                     <StyledButton onClick={onClickExport}>
                        Export as JSON
                     </StyledButton>
                     <StyledButton onClick={addNewSlide}>
                        Add slide
                     </StyledButton>
                  </ButtonContainer>
               </Form>
            </TabPanel>
            {slides.map((slide, idx) => (
               <TabPanel
                  key={idx}
                  style={{
                     paddingTop: tabListHeight ? `${tabListHeight}px` : "50px",
                  }}
                  forceRender
               >
                  <Form
                     ref={slideFormRef}
                     schema={isV2 ? SLIDE_SCHEMA : SLIDE_SCHEMA_V1}
                     validator={validator}
                     uiSchema={isV2 ? SLIDE_UI_SCHEMA : SLIDE_UI_SCHEMA_V1}
                     formData={slide}
                     autoComplete={"off"}
                     className="slide-form"
                     onChange={(data) => onSlidesChange(idx, data.formData)}
                  >
                     <ButtonContainer>
                        {idx === slides.length - 1 && (
                           <StyledButton
                              type="submit"
                              onClick={() => {
                                 if (
                                    slideFormRef.current?.validateForm() &&
                                    pageDetailsformRef.current.validateForm()
                                 ) {
                                    onSubmit();
                                 }
                              }}
                              disabled={isCreatePageLoading}
                           >
                              {isCreatePageLoading ? (
                                 <Flex>
                                    <LoadingSpinner />
                                    {isEditing ? "Updating..." : "Creating..."}
                                 </Flex>
                              ) : isEditing ? (
                                 "Update page"
                              ) : (
                                 "Create page"
                              )}
                           </StyledButton>
                        )}
                        {idx === slides.length - 1 && (
                           <StyledButton
                              type="submit"
                              onClick={() => {
                                 if (
                                    slideFormRef.current?.validateForm() &&
                                    pageDetailsformRef.current.validateForm()
                                 ) {
                                    onSubmit(true);
                                 }
                              }}
                              disabled={isSaveDraftLoading}
                           >
                              {isSaveDraftLoading ? (
                                 <Flex>
                                    <LoadingSpinner />
                                    Saving...
                                 </Flex>
                              ) : (
                                 "Save as draft"
                              )}
                           </StyledButton>
                        )}

                        <StyledButton>
                           <Link
                              href={{
                                 pathname: `/${pageDetails.url}`,
                                 query: {
                                    preview: "true",
                                 },
                              }}
                              legacyBehavior
                           >
                              <a target="_blank">Preview</a>
                           </Link>
                        </StyledButton>
                        <StyledButton onClick={onClickExport}>
                           Export as JSON
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
