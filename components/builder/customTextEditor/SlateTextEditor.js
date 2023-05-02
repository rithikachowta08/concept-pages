// Import React dependencies.
import { useEffect, useState } from "react";
import {
   Editor,
   createEditor,
   Element as SlateElement,
   Transforms,
   Range,
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

const insertImageLink = (editor, imageLinkNode) => {
   if (editor.selection) {
      wrapImageLinkButton(editor, imageLinkNode);
   }
};

const wrapImageLinkButton = (editor, imageLinkNode) => {
   const { selection } = editor;

   const [match] = Editor.nodes(editor, {
      match: (n) =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         n.type === SLATE_CONTENT_TYPES.MATH_EXPRESSION,
   });

   const newImageLinkNode = {
      type: "imageLink",
      url: imageLinkNode.url,
      altText: imageLinkNode.altText,
      children: match ? match[0] : [{ text: selection }],
   };

   Transforms.wrapNodes(editor, newImageLinkNode, { split: true });
   Transforms.unwrapNodes(editor, newImageLinkNode);
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
      modalContent: { body: null, image: { url: null, altText: null } },
   });
   const [openPicker, authResponse] = useDrivePicker();
   const [imageUrl, setImageUrl] = useState("");
   const [uploading, setUploading] = useState(false);

   const INITIAL_VALUE = initialValue || [
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
                     setIsImagePopupOpen(true);
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
      setIsImagePopupOpen(true);
      // googleDriveUploader(openPicker, setUploading, setImageUrl, (value) => {
      //    console.log("drive returned on change", value);
      //    imagePopupSubmitHandler(value);
      // });

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

   const imagePopupSubmitHandler = (imageLinkNode) => {
      console.log("on submit", imageLinkNode);
      setIsImagePopupOpen(false);
      const [imageLink] = Editor.nodes(editor, {
         match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === "imageLink",
      });
      if (imageLink) {
         if (imageLinkNode.url.length === 0) {
            editNode(editor, imageLinkNode, {
               type: SLATE_CONTENT_TYPES.PARAGRAPH,
               children: [{ text: linkElementToEdit.children[0].text }],
               url: undefined,
               altText: undefined,
            });
         } else {
            editNode(editor, linkElementToEdit, {
               ...linkElementToEdit,
               url: imageLinkNode.url,
               altText: imageLinkNode.altText,
            });
         }
      } else {
         insertImageLink(editor, imageLinkNode);
      }
      setLinkElementToEdit({});
   };

   const modalPopupCancelHandler = () => {
      setIsModalPopupOpen(false);
   };

   const modalPopupSubmitHandler = (modalNode) => {
      setIsModalPopupOpen(false);
      console.log(modalNode);
      const [modalTriggerEl] = Editor.nodes(editor, {
         match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === SLATE_CONTENT_TYPES.MODAL_TRIGGER,
      });

      if (modalTriggerEl) {
         // if this node already exists

         if (
            modalNode.modalTitle.length === 0 &&
            modalNode.modalContent.body[0].children[0].text.length === 0
         ) {
            // converting node type to "paragraph"
            editNode(editor, modalNode, {
               type: SLATE_CONTENT_TYPES.PARAGRAPH,
               modalTitle: undefined,
               modalContent: undefined,
               children: [
                  { text: modalNode.modalContent.body[0].children[0].text },
               ],
            });
         } else {
            // editing contents of the node
            editNode(editor, modalNode, {
               modalTitle: modalNode.modalTitle,
               modalContent: modalNode.modalContent,
               children: [
                  { text: modalNode.modalContent.body[0].children[0].text },
               ],
            });
         }
      } else {
         // else add a new node
         wrapModalTriggerHandler(editor, modalNode);
      }
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
      onValueChange(value);
   };

   const onKeyDown = (event) => {
      const { selection } = editor;

      // Default left/right behavior is unit:'character'.
      // This fails to distinguish between two cursor positions, such as
      // <inline>foo<cursor/></inline> vs <inline>foo</inline><cursor/>.
      // Here we modify the behavior to unit:'offset'.
      // This lets the user step into and out of the inline without stepping over characters.
      // You may wish to customize this further to only use unit:'offset' in specific cases.

      // console.log(event);
      // if (event.key === "Enter") {
      //    Transforms.insertNodes(editor, {
      //       type: "nextLine",
      //       children: [{ text: "" }],
      //    });
      //    event.preventDefault();
      //    return;
      // }
      // if (selection && Range.isCollapsed(selection)) {
      //    const { nativeEvent } = event;
      //    if (isKeyHotkey("left", nativeEvent)) {
      //       event.preventDefault();
      //       Transforms.move(editor, { unit: "offset", reverse: true });
      //       return;
      //    }
      //    if (isKeyHotkey("right", nativeEvent)) {
      //       event.preventDefault();
      //       Transforms.move(editor, { unit: "offset" });
      //       return;
      //    }
      // }
   };

   return (
      <Slate
         editor={editor}
         value={INITIAL_VALUE}
         onChange={onSlateContentChange}
      >
         {showContextMenu && (
            <CustomContextMenu
               xPos={points.x}
               yPos={points.y}
               options={(() => {
                  // TODO: simplify this IIFE logic
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
               data={modalElementToEdit}
            />
         </Popup>
         <Editable
            className="slate-editor"
            placeholder="content"
            renderElement={renderElement}
            onKeyDown={onKeyDown}
            onContextMenu={(e) => {
               e.preventDefault();
               setPoints({ x: e.pageX, y: e.pageY });
               setShowContextMenu(true);
            }}
         />
      </Slate>
   );
};

export default SlateTextEditor;
