import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const BodyComponent = dynamic(() => import("./BodyComponent"));
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
const Modal = dynamic(() => import("components/layout/Modal"));

const Slide = ({ data, isPreview, json, moveToSection, downIcon }) => {
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
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      TEXT_AND_APPLET: {
         component: TextAndAppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
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
            bg: data.theme,
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
         bg: data.theme,
         props: {
            title: data.title,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
   };

   let modal;
   if (data.modal) {
      const modalBody = data.modal.body.map((item, idx) => (
         <BodyComponent key={idx} item={item} theme={data.theme} isModal />
      ));
      modal = (
         <Modal
            isOpen={isModalOpen}
            bg={data.theme === "LIGHT" ? "DARK" : "LIGHT"}
            color={data.theme === "LIGHT" ? colors.WHITE : colors.BLACK}
            title={data.modal.title}
            content={modalBody}
            onDismiss={onDismiss}
         />
      );
   }

   let children = [];

   if (data.body) {
      data.body.forEach((item, idx) =>
         children.push(
            <BodyComponent
               key={idx}
               item={item}
               theme={data.theme}
               onHover={onHover}
               onHoverOut={onHoverOut}
               onClick={onClick}
            />
         )
      );
   }

   const SlideComponent = SLIDE_MAPPER[data.type];
   return (
      <SlideComponent.component {...SlideComponent.props} isPreview={isPreview}>
         {modal}
         {children}
      </SlideComponent.component>
   );
};

export default Slide;
