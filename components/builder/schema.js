import { SLIDE_TYPES } from "utils/constants";
import { COMPONENT_TYPES } from "components/dynamic-page/BodyComponent";
import ImageUploader from "./ImageUploader";

export const BASIC_PROPERTIES = {
   pageId: { type: "string", title: "Page ID" },
   title: { type: "string", title: "Title", default: "New concept page" },
   url: { type: "string", title: "URL" },
   colorTheme: {
      type: "string",
      title: "Color scheme",
      default: "BUBBLEGUM",
      enum: ["BUBBLEGUM", "CHALKBOARD", "ICE", "FOREST", "LUXURY"],
   },
   nextPageTitle: {
      type: "string",
      title: "Next Page Title",
   },
   nextPageUrl: {
      type: "string",
      title: "Next Page Link",
   },
   required: ["pageId", "title", "url"],
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

const CONTENT_BODY_DEPENDENCIES = {
   componentType: {
      oneOf: [
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.TEXT],
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
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.IMAGE],
               },
               url: {
                  type: "string",
                  title: "image",
               },
            },
         },
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.PILL],
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
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.BULLETED_LIST],
               },
               content: {
                  type: "string",
                  title: "Text",
               },
            },
         },
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.NUMBERED_LIST],
               },
               content: {
                  type: "string",
                  title: "Text",
               },
            },
         },
         {
            properties: {
               componentType: {
                  enum: [COMPONENT_TYPES.EQUATION_TABLE],
               },
               content: {
                  type: "string",
                  title: "Text",
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
      ],
   },
};

const CONTENT_BODY = {
   type: "array",
   title: "Content",
   items: {
      type: "object",
      properties: {
         componentType: {
            type: "string",
            title: "Component type",
            default: COMPONENT_TYPES.TEXT,
            enum: Object.values(COMPONENT_TYPES),
         },
      },
      dependencies: CONTENT_BODY_DEPENDENCIES,
   },
};

const MODAL_PROPERTIES = {
   type: "object",
   title: "Modal",
   properties: {
      title: {
         type: "string",
         title: "Title",
      },
      body: CONTENT_BODY,
   },
};

const SLIDE_DEPENDENCIES = {
   template: {
      oneOf: [
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.TEXT_AND_DIAGRAM],
               },
               secondaryTitle: {
                  type: "string",
                  title: "Secondary Title",
               },
               body: CONTENT_BODY,
               transitionImages: {
                  type: "array",
                  title: "Images",
                  secondaryTitle: {
                     type: "string",
                     title: "Secondary Title",
                  },
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
               modal: MODAL_PROPERTIES,
               comments: {
                  type: "string",
                  title: "Comments",
               },
            },
         },
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.TEXT_AND_APPLET],
               },
               secondaryTitle: {
                  type: "string",
                  title: "Secondary Title",
               },
               body: CONTENT_BODY,
               appletId: {
                  type: "string",
                  title: "Applet ID",
               },
               modal: MODAL_PROPERTIES,
               comments: {
                  type: "string",
                  title: "Comments",
               },
            },
         },
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.APPLET_ONLY],
               },
               secondaryTitle: {
                  type: "string",
                  title: "Secondary Title",
               },
               appletId: {
                  type: "string",
                  title: "Applet ID",
               },
               comments: {
                  type: "string",
                  title: "Comments",
               },
            },
         },
         {
            properties: {
               template: {
                  enum: [SLIDE_TYPES.MULTIPLE_DIAGRAM],
               },
               secondaryTitle: {
                  type: "string",
                  title: "Secondary Title",
               },
               body: CONTENT_BODY,
               images: {
                  type: "array",
                  title: "Images",
                  items: {
                     type: "object",
                     properties: {
                        diagram: {
                           type: "string",
                           title: "Image URL",
                        },
                        altText: {
                           type: "string",
                           title: "Alt Text",
                        },
                        caption: {
                           type: "string",
                           title: "Caption",
                        },
                     },
                  },
               },
               modal: MODAL_PROPERTIES,
               comments: {
                  type: "string",
                  title: "Comments",
               },
            },
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
               videoId: {
                  type: "string",
                  title: "Video ID",
               },
               thumbnail: {
                  type: "string",
                  title: "Thumbnail",
               },
               duration: {
                  type: "number",
                  title: "Video duration (s)",
               },
               comments: {
                  type: "string",
                  title: "Comments",
               },
            },
         },
      ],
   },
};

export const SLIDE_SCHEMA = {
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
         ],
      },
      theme: {
         type: "string",
         title: "Theme",
         default: "LIGHT",
         enum: ["LIGHT", "DARK"],
      },
      section: {
         type: "string",
         title: "Section Name",
      },
      title: {
         type: "string",
         title: "Title",
      },
   },
   required: ["template", "title", "section"],
   dependencies: SLIDE_DEPENDENCIES,
};

export const PAGE_DETAILS_SCHEMA = {
   type: "object",
   required: ["pageId", "title", "url"],
   properties: {
      ...BASIC_PROPERTIES,
      ...SEO_PROPERTIES,
   },
};

export const widgets = {
   DriveToS3ImageUploader: ImageUploader,
};

export const SLIDE_UI_SCHEMA = {
   body: {
      items: {
         content: {
            "ui:widget": "textarea",
         },
         url: {
            "ui:widget": ImageUploader,
         },
      },
   },
   transitionImages: {
      items: {
         url: {
            "ui:widget": ImageUploader,
         },
      },
   },
   images: {
      items: {
         diagram: {
            "ui:widget": ImageUploader,
         },
      },
   },
   thumbnail: {
      "ui:widget": ImageUploader,
   },
   comments: {
      "ui:widget": "textarea",
   },
};
