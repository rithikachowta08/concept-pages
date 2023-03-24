import React from "react";
import dynamic from "next/dynamic";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { Flex } from "components/StyledElements";
import {
   BASIC_PROPERTIES,
   SEO_PROPERTIES,
   NAV_PROPERTIES,
   SLIDE_PROPERTIES,
} from "./schema";

const schema = {
   title: "Concept Page Builder",
   type: "object",
   required: ["title"],
   properties: {
      ...BASIC_PROPERTIES,
      ...SLIDE_PROPERTIES,
      ...NAV_PROPERTIES,
      ...SEO_PROPERTIES,
   },
};

const uiSchema = {
   slides: {
      items: {
         body: {
            items: {
               content: {
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
