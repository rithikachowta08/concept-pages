// Import React dependencies.
import { useEffect, useState } from "react";
import {
   Editor,
   createEditor,
   Element as SlateElement,
   Transforms,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";
import styled from "styled-components";
import {
   DefaultElementText,
   ImageInteractionText,
   MathExpressionText,
   ModalTriggerText,
} from "./TextInteractionComponents";
import CustomContextMenu from "./CustomContextMenu";
import Popup from "reactjs-popup";
import ImageLinkPopup from "./ImageLinkPopup";
import { SLATE_CONTENT_TYPES } from "utils/constants";
import ModalPopup from "./ModalPopup";
import useDrivePicker from "react-google-drive-picker/dist";
import { googleDriveUploader } from "utils/services";

const TextEditorWrapper = styled.div`
   position: relative;
   border: 1px solid #bbb;
   border-radius: 4px;
   padding: 16px;
`;

const insertImageLink = (editor, value) => {
   if (editor.selection) {
      wrapImageLinkButton(editor, value);
   }
};

const wrapImageLinkButton = (editor, value) => {
   const { selection } = editor;

   const [match] = Editor.nodes(editor, {
      match: (n) =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         n.type === SLATE_CONTENT_TYPES.MATH_EXPRESSION,
   });

   const imageLinkNode = {
      type: "imageLink",
      url: value,
      children: match ? match[0] : [{ text: selection }],
   };

   Transforms.wrapNodes(editor, imageLinkNode, { split: true });
};

const wrapModalTriggerHandler = (editor, modalData) => {
   const { selection } = editor;
   const modalTriggerNode = {
      type: "modalTrigger",
      modalTitle: modalData.modalTitle,
      modalContent: modalData.modalContent,
      children: [{ text: selection }],
   };

   Transforms.wrapNodes(editor, modalTriggerNode, { split: true });
   Transforms.unwrapNodes(editor, modalTriggerNode);
};

const wrapMathExpression = (editor) => {
   const { selection } = editor;
   const modalTriggerNode = {
      type: "mathExpression",
      children: [{ text: selection }],
   };

   Transforms.wrapNodes(editor, modalTriggerNode, { split: true });
   Transforms.unwrapNodes(editor, modalTriggerNode);
};

const editNode = (editor, from, to) => {
   Transforms.setNodes(editor, to, {
      mode: from,
   });
};

const SlateTextEditor = ({ initialValue, onValueChange, allowedInputs }) => {
   const [editor] = useState(() => withReact(createEditor()));
   const [points, setPoints] = useState({ x: 0, y: 0 });
   const [showContextMenu, setShowContextMenu] = useState(false);
   const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
   const [isModalPopupOpen, setIsModalPopupOpen] = useState(false);
   const [linkElementToEdit, setLinkElementToEdit] = useState({});
   const [modalElementToEdit, setModalElementToEdit] = useState({
      modalTitle: "",
      modalContent: "",
   });
   const [openPicker, authResponse] = useDrivePicker();
   const [imageUrl, setImageUrl] = useState("");
   const [uploading, setUploading] = useState(false);

   const INITIAL_VALUE = [
      {
         type: "paragraph",
         children: [{ text: initialValue || "" }],
      },
   ];

   const CONTENT_TYPE_LIST = [
      {
         type: SLATE_CONTENT_TYPES.IMAGE_LINK,
         text: "Add image",
         onClick: () => addImageClickhandler(),
      },
      {
         type: SLATE_CONTENT_TYPES.MODAL_TRIGGER,
         text: "Add modal",
         onClick: () => addModalClickHandler(),
      },
      {
         type: SLATE_CONTENT_TYPES.MATH_EXPRESSION,
         text: "Add math expression",
         onClick: () => addMathClickHandler(),
      },
   ];
   const renderElement = (props) => {
      switch (props.element.type) {
         case SLATE_CONTENT_TYPES.IMAGE_LINK:
            return (
               <ImageInteractionText
                  {...props}
                  editor={editor}
                  element={props.element}
                  onClickHandler={(imageLinkNode) => {
                     setLinkElementToEdit(imageLinkNode);

                     const newNode = {
                        type: imageLinkNode.children
                           ? imageLinkNode.children[0].type
                           : SLATE_CONTENT_TYPES.PARAGRAPH,
                        children: imageLinkNode.children,
                        url: undefined,
                     };
                     editNode(
                        editor,
                        imageLinkNode,
                        newNode
                        //    {
                        //    type: imageLinkNode.children[0].type
                        //       ? imageLinkNode.children[0].type
                        //       : SLATE_CONTENT_TYPES.PARAGRAPH,
                        //    children: [
                        //       { text: linkElementToEdit.children[0].text },
                        //    ],
                        //    url: undefined,
                        // }
                     );
                     // setIsImagePopupOpen(true);

                     // googleDriveUploader(
                     //    openPicker,
                     //    setUploading,
                     //    setImageUrl,
                     //    (value) => {
                     //       console.log("drive returned on change", value);
                     //       imagePopupSubmitHandler({ url: value });
                     //    }
                     // );
                  }}
               />
            );

         case SLATE_CONTENT_TYPES.MODAL_TRIGGER:
            return (
               <ModalTriggerText
                  {...props}
                  editor={editor}
                  element={props.element}
                  onClickHandler={(modalData) => {
                     console.log(modalData);
                     setModalElementToEdit(modalData);
                     setIsModalPopupOpen(true);
                  }}
               />
            );

         case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
            return (
               <MathExpressionText
                  {...props}
                  editor={editor}
                  element={props.element}
                  onClickHandler={(value) => {
                     console.log("math expression clicked...", value);
                  }}
               />
            );

         default:
            return <DefaultElementText {...props} />;
      }
   };

   const addImageClickhandler = () => {
      // setIsImagePopupOpen(true);
      googleDriveUploader(openPicker, setUploading, setImageUrl, (value) => {
         console.log("drive returned on change", value);
         imagePopupSubmitHandler(value);
      });

      // imagePopupSubmitHandler("some random url");
      setShowContextMenu(false);
   };

   const addModalClickHandler = () => {
      setIsModalPopupOpen(true);
      setShowContextMenu(false);
   };

   const addMathClickHandler = () => {
      wrapMathExpression(editor);
      setShowContextMenu(false);
   };

   const imagePopupCancelHandler = () => {
      setIsImagePopupOpen(false);
      setLinkElementToEdit({});
   };

   const imagePopupSubmitHandler = (value) => {
      setIsImagePopupOpen(false);
      const [imageLink] = Editor.nodes(editor, {
         match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === "imageLink",
      });
      if (imageLink) {
         if (value.length === 0) {
            editNode(editor, value, {
               type: SLATE_CONTENT_TYPES.PARAGRAPH,
               children: [{ text: linkElementToEdit.children[0].text }],
               url: undefined,
            });
         } else {
            editNode(editor, linkElementToEdit, {
               ...linkElementToEdit,
               url: value,
            });
         }
      } else {
         insertImageLink(editor, value);
      }
      setLinkElementToEdit({});
   };

   const modalPopupCancelHandler = () => {
      setIsModalPopupOpen(false);
      setModalElementToEdit({});
   };

   const modalPopupSubmitHandler = (value) => {
      if (value.modalTitle.length === 0 && value.modalContent.length === 0) {
         editNode(editor, value, {
            type: SLATE_CONTENT_TYPES.PARAGRAPH,
            modalTitle: undefined,
            modalContent: undefined,
         });
      } else {
         wrapModalTriggerHandler(editor, value);
      }
      setIsModalPopupOpen(false);
      setModalElementToEdit({});
   };

   const flattenSlateData = (data, initialValue = "") => {
      let value = initialValue;

      for (const el of data) {
         if (el.children) {
            let param;
            switch (el.type) {
               case SLATE_CONTENT_TYPES.IMAGE_LINK:
                  param = `%di_${el.text}`;

               case SLATE_CONTENT_TYPES.MODAL_TRIGGER:
                  param = `%mt_${el.text}`;

               case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
                  param = `%ma_${el.text}`;

               default:
                  param = el.text;
            }

            value += flattenSlateData(el.children, param);
         } else {
            // switch (el.type) {
            //    case SLATE_CONTENT_TYPES.IMAGE_LINK:
            //       return `%di_${el.text}`;

            //    case SLATE_CONTENT_TYPES.MODAL_TRIGGER:
            //       return `%mt_${el.text}`;

            //    case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
            //       return `%ma_${el.text}`;

            //    default:
            //       return el.text;
            // }
            value += el.text;
         }
      }

      return value;
   };

   const onSlateContentChange = (value) => {
      console.log(value);
      const flattenData = flattenSlateData(value);
      // console.log(flattenData);
      onValueChange(flattenData);
   };

   return (
      <Slate
         editor={editor}
         value={INITIAL_VALUE}
         onChange={onSlateContentChange}
      >
         <TextEditorWrapper>
            {showContextMenu && (
               <CustomContextMenu
                  xPos={points.x}
                  yPos={points.y}
                  options={(() => {
                     const t = [];
                     for (const el of CONTENT_TYPE_LIST) {
                        const ind = allowedInputs.findIndex(
                           (aI) => aI === el.type
                        );
                        if (ind !== -1) {
                           t.push(el);
                        }
                     }
                     return t;
                  })()}
                  onClose={() => setShowContextMenu(false)}
               />
            )}
            <Popup
               modal
               closeOnDocumentClick={false}
               lockScroll
               open={isImagePopupOpen}
            >
               <ImageLinkPopup
                  open={isImagePopupOpen}
                  onCancel={imagePopupCancelHandler}
                  onSubmit={imagePopupSubmitHandler}
                  value={linkElementToEdit}
               />
            </Popup>
            <Popup
               modal
               closeOnDocumentClick={false}
               lockScroll
               open={isModalPopupOpen}
            >
               <ModalPopup
                  open={isModalPopupOpen}
                  onCancel={modalPopupCancelHandler}
                  onSubmit={modalPopupSubmitHandler}
                  value={modalElementToEdit}
               />
            </Popup>
            <Editable
               placeholder="content"
               renderElement={renderElement}
               onContextMenu={(e) => {
                  e.preventDefault();
                  setPoints({ x: e.pageX, y: e.pageY });
                  setShowContextMenu(true);
               }}
            />
         </TextEditorWrapper>
      </Slate>
   );
};

export default SlateTextEditor;
