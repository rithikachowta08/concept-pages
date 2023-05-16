import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModals from "hooks/useModals";
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
const PracticeSlide = dynamic(() => import("components/slides/PracticeSlide"));
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
   const { isModalOpen, modalIdx, onClick, onDismiss } = useModals();
   const dynamicImportApplet = data.appletId
      ? dynamic(() =>
           import("@assessed/byjus-us-math-applets").then((mod) => {
              return mod[data.appletId];
           })
        )
      : null;
   const SLIDE_MAPPER = {
      [SLIDE_TYPES.APPLET_ONLY]: {
         component: AppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            AppletComponent: dynamicImportApplet,
            downIcon,
            currentPageIdx,
         },
      },
      [SLIDE_TYPES.GRASPABLE_APPLET]: {
         component: PracticeSlide,
         props: {
            title: data.title,
            bg: data.theme,
            secondaryTitle: data.secondaryTitle,
            equations: data.equations,
            index: idx + 1,
            isPreview,
            downIcon,
            currentPageIdx,
         },
      },
      [SLIDE_TYPES.TEXT_AND_APPLET]: {
         component: TextAndAppletSlide,
         props: {
            title: data.title,
            bg: data.theme,
            AppletComponent: dynamicImportApplet,
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

   let modals = [];
   if (data.modal) {
      const allModals = Array.isArray(data.modal) ? data.modal : [data.modal];
      allModals.forEach((singleModalData, currentModalIdx) => {
         const modalBody = singleModalData.body?.map((item, idx) => (
            <BodyComponent key={idx} item={item} theme={data.theme} isModal />
         ));
         modals.push(
            <Modal
               key={`modal_${currentModalIdx}`}
               currentModalIdx={currentModalIdx}
               isOpen={modalIdx === currentModalIdx && isModalOpen}
               modalContainerId={isPreview && `slide-${idx}`}
               bg={data.theme === "LIGHT" ? "DARK" : "LIGHT"}
               color={data.theme === "LIGHT" ? colors.WHITE : colors.BLACK}
               title={singleModalData.title}
               content={modalBody}
               onDismiss={onDismiss}
            />
         );
      });
   }

   let children = [];
   let textParamCount = 0;
   let modalCount = 0;

   if (data.body) {
      data.body.forEach((item, idx) => {
         children.push(
            <BodyComponent
               key={idx}
               item={item}
               theme={data.theme}
               colorTheme={colorTheme}
               onHover={onHover}
               onHoverOut={onHoverOut}
               onClick={onClick}
               textParamCount={textParamCount}
               modalCount={modalCount}
            />
         );
         textParamCount += item.textParams?.length;
         if (item.content || item.numberedPoints || item.bulletPoints) {
            const count = (
               (item.content || item.numberedPoints || item.bulletPoints).match(
                  /%mt/g
               ) || []
            ).length;
            modalCount += count;
         }
      });
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
            {modals}
            {children}
         </SlideComponent.component>
      </div>
   );
};

export default Slide;
