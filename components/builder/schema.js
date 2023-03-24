import { SLIDE_TYPES } from "utils/constants";
import { COMPONENT_TYPES } from "components/dynamic-page/BodyComponent";

export const BASIC_PROPERTIES = {
   title: { type: "string", title: "Title", default: "New concept page" },
   url: { type: "string", title: "URL" },
   nextPageTitle: {
      type: "string",
      title: "Next Page Title",
   },
   nextPageUrl: {
      type: "string",
      title: "Next Page Link",
   },
};

export const SEO_PROPERTIES = {
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
};

export const NAV_PROPERTIES = {
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
};

const CONTENT_BODY = {
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
         content: {
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
};

const MODAL_PROPERTIES = {};

const SLIDE_DEPENDENCIES = {
   template: {
      oneOf: [
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.TEXT_AND_DIAGRAM],
               },
               body: CONTENT_BODY,
               transitionImages: {
                  type: "array",
                  title: "Images",
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
            required: ["transitionImages"],
         },
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.TEXT_AND_APPLET],
               },
               body: CONTENT_BODY,
               appletId: {
                  type: "string",
                  title: "Applet ID",
               },
            },
            required: ["appletId"],
         },
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.VIDEO_ONLY],
               },
               hlsUrl: {
                  type: "string",
                  title: "HLS URL",
               },
               dashUrl: {
                  type: "string",
                  title: "Dash URL",
               },
               title: {
                  type: "string",
                  title: "Video title",
               },
               duration: {
                  type: "number",
                  title: "Video duration (s)",
               },
            },
         },
      ],
   },
};

export const SLIDE_PROPERTIES = {
   slides: {
      type: "array",
      title: "Slides",
      items: {
         type: "object",
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
            modal: MODAL_PROPERTIES,
         },
         dependencies: SLIDE_DEPENDENCIES,
      },
   },
};
