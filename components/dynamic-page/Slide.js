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
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));

const Slide = ({
   data,
   colorTheme,
   idx,
   isPreview,
   downIcon,
   currentPageIdx,
}) => {
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
            currentPageIdx,
         },
      },
      [SLIDE_TYPES.TEXT_AND_APPLET]: {
         component: TextAndAppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            downIcon,
            currentPageIdx,
         },
      },
      [SLIDE_TYPES.VIDEO_ONLY]: {
         component: VideoSlide,
         props: {
            videoContent: {
               dash_Url: data.dashUrl,
               hls_Url: data.hlsUrl,
               thumbnail: data.thumbnail,
               videoId: data.videoId,
               duration: data.duration,
               title: data.title,
            },
            index: idx,
            currentPageIdx,
            downIcon,
            forcePlay: isPreview,
            downIconId: `s${idx}-video-down-icon`,
            videoSlideId: `s${idx}-video-slide`,
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
         props: {
            title: data.title,
            secondaryTitle: data.secondaryTitle,
            bg: data.theme,
            images:
               data.images?.map((image) => ({
                  diagram: (
                     <TransitionImage
                        images={[image.diagram]}
                        altTexts={[image.altText]}
                        activeIndex={activeIndex}
                     />
                  ),
                  caption: image.caption,
               })) || [],
            downIcon,
         },
      },
   };

   let modal;
   console.log(data.modal);
   if (data.modal) {
      const modalBody = data.modal.body?.map((item, idx) => (
         <BodyComponent key={idx} item={item} theme={data.theme} isModal />
      ));
      modal = (
         <Modal
            isOpen={isModalOpen}
            modalContainerId={isPreview && `slide-${idx}`}
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
               colorTheme={colorTheme}
               onHover={onHover}
               onHoverOut={onHoverOut}
               onClick={onClick}
            />
         )
      );
   }

   const SlideComponent = SLIDE_MAPPER[data.template];
   return (
      // TODO: Fix this
      <div
         style={{ height: "100%", width: "100%", position: "absolute" }}
         id={`slide-${idx}`}
      >
         <SlideComponent.component
            {...SlideComponent.props}
            colorTheme={colorTheme}
            isPreview={isPreview}
         >
            {modal}
            {children}
         </SlideComponent.component>
      </div>
   );
};

export default Slide;
