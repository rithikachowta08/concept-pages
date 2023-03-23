import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";
import { SLIDE_TYPES } from "utils/constants";
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
const Modal = dynamic(() => import("components/layout/Modal"));

const Slide = ({ data, isPreview, json, moveToSection, downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   const SLIDE_MAPPER = {
      [SLIDE_TYPES.APPLET_ONLY]: {
         component: AppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      [SLIDE_TYPES.TEXT_AND_APPLET]: {
         component: TextAndAppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      [SLIDE_TYPES.VIDEO_ONLY]: {
         component: VideoSlide,
         props: {
            title: data.title,
            downIcon,
         },
      },
      [SLIDE_TYPES.TEXT_AND_DIAGRAM]: {
         component: TextAndDiagramSlide,
         props: {
            title: data.title,
            bg: data.theme,
            diagram: data.transitionImages ? (
               <TransitionImage
                  images={data.transitionImages.map((image) => image.url)}
                  altTexts={data.transitionImages.map((image) => image.altText)}
                  activeIndex={activeIndex}
               />
            ) : (
               <></>
            ),
            secondaryTitle: data.secondaryTitle,
            downIcon,
         },
      },
      [SLIDE_TYPES.MULTIPLE_DIAGRAM]: {
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

   const SlideComponent = SLIDE_MAPPER[data.template];
   return (
      <SlideComponent.component {...SlideComponent.props} isPreview={isPreview}>
         {modal}
         {children}
      </SlideComponent.component>
   );
};

export default Slide;
