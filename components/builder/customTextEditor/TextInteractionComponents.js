import { useSelected } from "slate-react";
import styled from "styled-components";

const ImageInteractionWrapper = styled.span`
   background-color: #a753b520;
   color: #a753b5;
   border-radius: 12px;
   padding: 4px;
   cursor: pointer;
   font-style: inherit;

   &::selection {
      background-color: #a753b505 !important;
   }
`;

const ModalInteractionWrapper = styled.span`
   font-weight: 600;
   text-decoration: underline;
   cursor: pointer;

   &::selection {
      background-color: #a753b505 !important;
   }
`;

const MathInteractionWrapper = styled.span`
   font-style: italic;

   &::selection {
      background-color: #a753b505 !important;
   }
`;

const DefaultText = styled.span`
   &::selection {
      background-color: #a753b505 !important;
   }
`;

export const DefaultElementText = (props) => {
   return <DefaultText {...props.attributes}>{props.children}</DefaultText>;
};

export const ImageInteractionText = ({
   attributes,
   children,
   element,
   onClickHandler,
}) => {
   const selected = useSelected();

   return (
      <ImageInteractionWrapper
         {...attributes}
         data-playwright-selected={selected}
         onClick={() => onClickHandler(element)}
      >
         {children}
      </ImageInteractionWrapper>
   );
};

export const MathExpressionText = ({
   attributes,
   children,
   element,
   onClickHandler,
}) => {
   const selected = useSelected();

   return (
      <MathInteractionWrapper
         {...attributes}
         data-playwright-selected={selected}
         onClick={() => onClickHandler(element)}
      >
         {children}
      </MathInteractionWrapper>
   );
};

export const ModalTriggerText = ({
   attributes,
   children,
   element,
   onClickHandler,
}) => {
   const selected = useSelected();

   return (
      <ModalInteractionWrapper
         {...attributes}
         data-playwright-selected={selected}
         onClick={() => onClickHandler(element)}
      >
         {children}
      </ModalInteractionWrapper>
   );
};
