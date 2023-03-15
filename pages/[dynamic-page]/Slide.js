import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextParamComponent = dynamic(() => import("./TextParamComponent"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));

const Slide = ({ data, json, moveToSection, downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   const SLIDE_MAPPER = {
      TITLE: {
         component: TitleSlide,
         props: {
            title: json.title,
            anchorIdxes: json.navSections.map(
               (navSection) => navSection.slides[0] + 1
            ),
            contentListItems: data.sections,
            moveToSection,
            downIcon,
         },
      },
      APPLET: {
         component: AppletSlide,
         props: {
            title: data.title,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      TEXT_AND_APPLET: {
         component: TextAndAppletSlide,
         props: {
            title: data.title,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      VIDEO: {
         component: VideoSlide,
         props: {
            title: data.title,
            downIcon,
         },
      },
      TEXT_AND_DIAGRAM: {
         component: TextAndDiagramSlide,
         props: {
            title: data.title,
            diagram: (
               <TransitionImage
                  images={data.transitionImages}
                  altTexts={data.transitionImageAltTexts}
                  activeIndex={activeIndex}
               />
            ),
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      MULTIPLE_DIAGRAM: {
         component: MultipleDiagramSlide,
         props: {
            title: data.title,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
   };

   let children = [];

   if (data.body) {
      data.body.forEach((bodyElem) => {
         const modifiedContent = bodyElem.content.split(/(%.*?% )/g);
         children.push(
            <Paragraph>
               {modifiedContent.map((child, idx) => {
                  const str = child.trim();
                  const isTextParam = str.startsWith("%") && str.endsWith("%");
                  return isTextParam ? (
                     <TextParamComponent
                        type={str.substring(1, str.length - 1)}
                        index={idx}
                        onHover={onHover}
                        onHoverOut={onHoverOut}
                        onClick={onClick}
                        values={data.textParams}
                     ></TextParamComponent>
                  ) : (
                     str
                  );
               })}
            </Paragraph>
         );
      });
   }

   const SlideComponent = SLIDE_MAPPER[data.type];
   return (
      <SlideComponent.component {...SlideComponent.props}>
         {data.modal && (
            <Modal
               isOpen={isModalOpen}
               title={data.modal.title}
               content={<div>{data.modal.content}</div>}
               onDismiss={onDismiss}
            />
         )}
         {children}
      </SlideComponent.component>
   );
};

export default Slide;
