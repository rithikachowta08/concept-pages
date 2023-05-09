// Import React dependencies.
import { useState } from "react";
import {
   Editor,
   createEditor,
   Element as SlateElement,
   Transforms,
   Element,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Popup from "reactjs-popup";
import {
   DefaultElementText,
   ImageInteractionText,
   MathExpressionText,
   ModalTriggerText,
   NextParaText,
} from "./TextInteractionComponents";
import CustomContextMenu from "./CustomContextMenu";
import ImageLinkPopup from "./ImageLinkPopup";
import ModalPopup from "./ModalPopup";
import { SLATE_CONTENT_TYPES } from "utils/constants";

const wrapImageLink = (editor, imageLinkNode) => {
   const { selection } = editor;

   const [match] = Editor.nodes(editor, {
      match: (n) =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         n.type === SLATE_CONTENT_TYPES.MATH_EXPRESSION,
   });

   const newImageLinkNode = {
      type: SLATE_CONTENT_TYPES.IMAGE_LINK,
      url: imageLinkNode.url,
      altText: imageLinkNode.altText,
      children: match ? match[0] : [{ text: selection }],
   };

   Transforms.wrapNodes(editor, newImageLinkNode, { split: true });
};

const wrapModalTrigger = (editor, modalData) => {
   const { selection } = editor;
   const modalTriggerNode = {
      type: SLATE_CONTENT_TYPES.MODAL_TRIGGER,
      modalTitle: modalData.modalTitle,
      modalContent: modalData.modalContent,
      children: [{ text: selection }],
   };

   Transforms.wrapNodes(editor, modalTriggerNode, { split: true });
};

const wrapMathExpression = (editor) => {
   const { selection } = editor;
   const mathExNode = {
      type: SLATE_CONTENT_TYPES.MATH_EXPRESSION,
      children: [{ text: selection }],
   };
   Transforms.wrapNodes(editor, mathExNode, { split: true });
};

const editNode = (editor, from, to) => {
   Transforms.setNodes(editor, to, {
      match: (n) => n === from,
   });
};

const unwrapNode = (editor, nodeType, imageLinkNode) => {
   Transforms.unwrapNodes(editor, {
      match: (n) =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         n.type === nodeType &&
         n === imageLinkNode,
   });
};

const customNormalize = (editor) => {
   const { isInline } = editor;

   editor.isInline = (element) =>
      [
         SLATE_CONTENT_TYPES.IMAGE_LINK,
         SLATE_CONTENT_TYPES.MATH_EXPRESSION,
         SLATE_CONTENT_TYPES.MODAL_TRIGGER,
      ].includes(element.type) || isInline(element);

   return editor;
};

const SlateTextEditor = ({ initialValue, onValueChange, allowedInputs }) => {
   const [editor] = useState(() => withReact(customNormalize(createEditor())));
   const [points, setPoints] = useState({ x: 0, y: 0 });
   const [showContextMenu, setShowContextMenu] = useState(false);
   const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
   const [isModalPopupOpen, setIsModalPopupOpen] = useState(false);
   const [linkElementToEdit, setLinkElementToEdit] = useState({});
   const [modalElementToEdit, setModalElementToEdit] = useState({
      modalTitle: "",
      modalContent: { body: null, image: { url: null, altText: null } },
   });

   const INITIAL_VALUE = initialValue || [
      {
         type: SLATE_CONTENT_TYPES.TEXT_LINE,
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
                     console.log("modal data", modalData);
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

         case SLATE_CONTENT_TYPES.LINE_BREAK:
            return <span {...props}></span>;

         default:
            return <DefaultElementText {...props} />;
      }
   };

   const addImageClickhandler = () => {
      setIsImagePopupOpen(true);
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
            n.type === SLATE_CONTENT_TYPES.IMAGE_LINK,
      });
      if (imageLink) {
         if (imageLinkNode.url.length === 0) {
            unwrapNode(
               editor,
               SLATE_CONTENT_TYPES.IMAGE_LINK,
               linkElementToEdit
            );
         } else {
            editNode(editor, linkElementToEdit, {
               ...linkElementToEdit,
               url: imageLinkNode.url,
               altText: imageLinkNode.altText,
            });
         }
      } else {
         wrapImageLink(editor, imageLinkNode);
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
            unwrapNode(
               editor,
               SLATE_CONTENT_TYPES.MODAL_TRIGGER,
               modalElementToEdit
            );
         } else {
            // editing contents of the node
            editNode(editor, modalElementToEdit, {
               ...modalNode,
               modalTitle: modalNode.modalTitle,
               modalContent: modalNode.modalContent,
            });
         }
      } else {
         // else add a new node
         wrapModalTrigger(editor, modalNode);
      }
   };

   const onSlateContentChange = (value) => {
      console.log(value);

      // const normalizedSlateData = normalizedData(value);
      // onValueChange(normalizedSlateData);
      onValueChange(value);
   };

   const onKeyDown = (event) => {
      const [nextLineNode] = Editor.nodes(editor, {
         match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === SLATE_CONTENT_TYPES.LINE_BREAK,
      });

      // const { insertBreak } = editor;

      // editor.insertBreak = () => {
      //    const { selection } = editor;
      //    if (selection) {
      //       Transforms.insertNodes(editor, {
      //          type: SLATE_CONTENT_TYPES.PARAGRAPH,
      //          children: [{ text: "" }],
      //       });
      //       return;
      //    }
      //    insertBreak();
      // };

      // console.log(event);
      if (event.key === "Enter") {
         // If current cursor is on nextline node
         // if (nextLineNode) {
         //    Transforms.insertText(editor, "\n");
         // } else {
         // Transforms.insertNodes(editor, {
         //    type: SLATE_CONTENT_TYPES.PARAGRAPH,
         //    // Normal behaviour
         //    children: [{ text: "" }],
         // });
         // }
         // if (nextLineNode) {
         //    console.log(nextLineNode[0]);
         //    Transforms.insertText(editor, "\n");
         // } else {
         //    Transforms.insertNodes(editor, {
         //       type: SLATE_CONTENT_TYPES.LINE_BREAK,
         //       // Normal behaviour
         //       children: [{ text: "" }],
         //    });
         // }
         // Transforms.insertNodes(editor, {
         //    type: SLATE_CONTENT_TYPES.PARAGRAPH,
         //    children: [{ text: "" }],
         // });
         // event.preventDefault();
         // event.stopPropagation();
      } else if (event.key === "Backspace") {
      }
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
            // placeholder="content"
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
