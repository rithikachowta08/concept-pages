import React from "react";
import dynamic from "next/dynamic";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { SLIDE_TYPES } from "utils/constants";
import { COMPONENT_TYPES } from "components/dynamic-page/BodyComponent";
import { Flex } from "components/StyledElements";

const schema = {
   title: "Concept Page Builder",
   type: "object",
   required: ["title"],
   properties: {
      title: { type: "string", title: "Title", default: "New concept page" },
      url: { type: "string", title: "URL" },
      slides: {
         type: "array",
         title: "Slides",
         items: {
            type: "object",
            required: ["template"],
            properties: {
               template: {
                  type: "string",
                  title: "Template",
                  default: SLIDE_TYPES.TEXT_AND_DIAGRAM,
                  enum: [
                     SLIDE_TYPES.TEXT_AND_DIAGRAM,
                     SLIDE_TYPES.TEXT_AND_APPLET,
                     SLIDE_TYPES.APPLET_ONLY,
                     SLIDE_TYPES.VIDEO_ONLY,
                     SLIDE_TYPES.MULTIPLE_DIAGRAM,
                     SLIDE_TYPES.CONCLUSION,
                  ],
               },
               theme: {
                  type: "string",
                  title: "Theme",
                  default: "LIGHT",
                  enum: ["LIGHT", "DARK"],
               },
               title: {
                  type: "string",
                  title: "Title",
               },
               secondaryTitle: {
                  type: "string",
                  title: "Secondary Title",
               },
               body: {
                  type: "array",
                  title: "Body",
                  items: {
                     type: "object",
                     properties: {
                        componentType: {
                           type: "string",
                           title: "Component type",
                           default: COMPONENT_TYPES.TEXT,
                           enum: Object.values(COMPONENT_TYPES),
                        },
                        textContent: {
                           type: "string",
                           title: "content",
                        },
                        textParams: {
                           type: "array",
                           title: "Text Parameters",
                           items: {
                              type: "object",
                              properties: {
                                 id: {
                                    title: "ID",
                                    type: "string",
                                 },
                                 value: {
                                    title: "Value",
                                    type: "string",
                                 },
                              },
                           },
                        },
                     },
                  },
               },
               transitionImages: {
                  type: "array",
                  title: "images",
                  items: {
                     type: "object",
                     properties: {
                        url: {
                           type: "string",
                           title: "Image URL",
                        },
                        altText: {
                           type: "string",
                           title: "Alt Text",
                        },
                     },
                  },
               },
            },
         },
      },
      navigation: {
         title: "Navigation",
         type: "object",
         properties: {
            sections: {
               type: "array",
               title: "Page Sections",
               items: {
                  type: "object",
                  properties: {
                     name: {
                        type: "string",
                        title: "Name",
                     },
                     firstSlideIndex: {
                        type: "string",
                        title: "Starting Slide Number",
                     },
                  },
               },
            },
         },
      },
      seo: {
         title: "SEO",
         type: "object",
         properties: {
            title: {
               type: "string",
               title: "Title",
            },
            meta: {
               type: "string",
               title: "Meta",
            },
         },
      },
      nextPageTitle: {
         type: "string",
         title: "Next Page Title",
      },
      nextPageUrl: {
         type: "string",
         title: "Next Page Link",
      },
   },
};

const uiSchema = {
   slides: {
      items: {
         body: {
            items: {
               textContent: {
                  "ui:widget": "textarea",
               },
            },
         },
      },
   },
};

const Editor = ({ setJson, json }) => {
   const onChange = (data) => {
      setJson(data.formData);
   };
   return (
      <Flex flex="1" style={{ overflow: "scroll" }}>
         <Form
            schema={schema}
            validator={validator}
            uiSchema={uiSchema}
            formData={json}
            autoComplete={"off"}
            className="builder-editor"
            // onSubmit={() => console.log("clicked submit")}
            onChange={onChange}
            // onError={() => console.log("uh oh")}
         />
      </Flex>
   );
};

export default Editor;
