import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const slide_2_a = "assets/volume-of-cylinder/slide 2_a.svg";
const slide_2_b = "assets/volume-of-cylinder/slide 2_b.svg";
const slide_2_c = "assets/volume-of-cylinder/slide 2_c.svg";
const slide_2_d = "assets/volume-of-cylinder/slide 2_d.svg";

const content =
   "A cylinder is a three-dimensional shape that has two %textSpanBg% of %textSpanBg% , joined by a curved surface. The bases are separated by a %textSpanBg% . The %ModalTriggerText% for this is here.";

const textSpanBgItems = [
   "parallel circular bases",
   "radius (r)",
   "perpendicular distance (h)",
];
const ModalTriggerTextItems = ["modal"];

const Slide2 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            A parallelogram is a quadrilateral whose opposite sides are equal in
            length and parallel to each other.
         </Paragraph>
         <ModalImg
            src={slide_2_d}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a unit cube"
         />
      </Flex>
   );
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };

   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   const TextBgComponent = (id, cont) => (
      <>
         <TextSpanBg
            id={id}
            onHover={onHover}
            onHoverOut={onHoverOut}
            hoverColor={colors.DARK_LAVENDER}
         >
            {cont}
         </TextSpanBg>{" "}
      </>
   );

   const ModalTriggerComponent = (id, cont) => (
      <>
         <ModalTriggerText onClick={onClick}>{cont}</ModalTriggerText>{" "}
      </>
   );

   const mapper = {
      "%textSpanBg%": {
         component: TextBgComponent,
         content: textSpanBgItems,
         index: 1,
      },
      "%ModalTriggerText%": {
         component: ModalTriggerComponent,
         content: ModalTriggerTextItems,
         index: 1,
      },
   };

   const [modifiedContent, setModifiedContent] = useState([]);
   useEffect(() => {
      setModifiedContent(content.split(/(%.*?% )/g));
   }, []);

   return (
      <TextAndDiagramSlide
         title="What is a cylinder?"
         diagram={
            <TransitionImage
               images={[slide_2_a, slide_2_b, slide_2_c, slide_2_d]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder highlighting circular bases",
                  "Diagram of a cylinder highlighting radius",
                  "Diagram of a cylinder highlighting height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Parallelogram"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            {modifiedContent.map(
               (child) =>
                  child.startsWith("%")
                     ? mapper[child.trim()].component(
                          mapper[child.trim()].index,
                          mapper[child.trim()].content[
                             mapper[child.trim()].index++ - 1
                          ]
                       )
                     : child
               // <>
               //    {child.startsWith("%")
               //       ? (itm = mapper[child.trim()]) =>
               //            itm.component(itm.index, itm.content[itm.index++ - 1])
               //       : child}
               // </>
            )}
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
