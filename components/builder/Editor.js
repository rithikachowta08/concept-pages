import React from "react";
import dynamic from "next/dynamic";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { SLIDE_TYPES } from "utils/constants";
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
                  enum: Object.values(SLIDE_TYPES),
               },
               theme: {
                  type: "string",
                  title: "Theme",
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

const Editor = ({ setJson, json }) => {
   const onChange = (data) => {
      console.log(data.formData);
      setJson(data.formData);
   };
   return (
      <Flex flex="1" style={{ overflow: "scroll" }}>
         <Form
            schema={schema}
            validator={validator}
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
