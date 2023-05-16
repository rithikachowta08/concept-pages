import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";
import { SLATE_CONTENT_TYPES, SLIDE_TYPES } from "utils/constants";
import { useCallback, useEffect, useState } from "react";
import { COMPONENT_TYPES } from "./BodyComponent";
import { normalizeSlateData } from "utils/services";
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
   const [slideBody, setSlideBody] = useState(data.body);
   const [transitionImages, setTransitionImages] = useState([]);
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   useEffect(() => {
      const newBody = addIndicesToTranImages(data.body);
      setSlideBody(newBody);
      const allImages = getAllTransitionImages({ ...data, body: newBody });
      setTransitionImages(allImages);
      console.log("setting body and images", newBody, allImages);
   }, [data]);

   const addIndicesToTranImages = (dataBody) => {
      if (!dataBody) return;

      // const newBody = structuredClone(dataBody);
      // console.log("adding indices", dataBody);
      let imageIdx = 1;
      const newBody = dataBody.map((body) => {
         if (!body.content) return body;

         return {
            ...body,
            content: body.content.map((line) => {
               return {
                  ...line,
                  children: line.children.map((inline) => {
                     switch (inline.type) {
                        case SLATE_CONTENT_TYPES.IMAGE_LINK:
                           return { ...inline, idx: imageIdx++ };

                        case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
                           return {
                              ...inline,
                              children: inline.children.map((inner) => ({
                                 ...inner,
                                 idx:
                                    inner.type ===
                                    SLATE_CONTENT_TYPES.IMAGE_LINK
                                       ? imageIdx++
                                       : undefined,
                              })),
                           };

                        default:
                           return inline;
                     }
                  }),
               };
            }),
         };
      });
      console.log("added indices", newBody);
      return newBody;
   };

   const getAllTransitionImages = (newData) => {
      const allImages = [{ ...newData.defaultImage, idx: 0 }];

      if (!newData.body) {
         return allImages;
      }
      console.log("new body", newData);

      for (const body of newData.body) {
         if (!body.content) return;

         body.content.forEach((line) => {
            // const imageData = line.children.filter(
            //    (inlineEl) =>
            //       inlineEl.type === SLATE_CONTENT_TYPES.IMAGE_LINK ||
            //       inlineEl.type === SLATE_CONTENT_TYPES.IMAGE_LINK_WITH_MATH
            // );

            for (const inline of line.children) {
               switch (inline.type) {
                  case SLATE_CONTENT_TYPES.IMAGE_LINK:
                     allImages.push(inline);

                  case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
                     inline.children.forEach((inner) => {
                        if (inner.type === SLATE_CONTENT_TYPES.IMAGE_LINK) {
                           allImages.push(inner);
                        }
                     });
               }
            }

            // allImages.push(...imageData);
         });
      }
      console.log("all images", allImages);
      return allImages;
   };
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
            diagram: data.defaultImage ? (
               // <></>

               <TransitionImage
                  // images={data.transitionImages.map((image) => image.url)}
                  // altTexts={data.transitionImages.map((image) => image.altText)}
                  images={
                     transitionImages
                        ? transitionImages.map((image) => image.url)
                        : []
                  }
                  altTexts={
                     transitionImages
                        ? transitionImages.map((image) => image.altText)
                        : []
                  }
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

   if (data.body && data.body[0] && data.body[0].content) {
      let modalData = [];

      for (const line of data.body[0].content) {
         const newModalData = line.children.filter(
            (inlineEl) => inlineEl.type === SLATE_CONTENT_TYPES.MODAL_TRIGGER
         )[0];
         if (newModalData) {
            modalData.push(newModalData);
         }
      }

      modalData.forEach((singleModalData) => {
         let modalContentBody = [
            <BodyComponent
               key={idx}
               item={{
                  componentType: COMPONENT_TYPES.TEXT,
                  content: singleModalData.modalContent.body,
               }}
               theme={data.theme}
               isModal
            />,
         ];
         if (singleModalData.modalContent.image) {
            modalContentBody.push(
               <BodyComponent
                  key={idx}
                  item={{
                     componentType: COMPONENT_TYPES.IMAGE,
                     content: singleModalData.modalContent.image,
                  }}
                  theme={data.theme}
                  isModal
               />
            );
         }

         modals.push(
            <Modal
               isOpen={isModalOpen}
               modalContainerId={isPreview && `slide-${idx}`}
               bg={data.theme === "LIGHT" ? "DARK" : "LIGHT"}
               color={data.theme === "LIGHT" ? colors.WHITE : colors.BLACK}
               title={singleModalData.modalTitle}
               content={modalContentBody}
               onDismiss={onDismiss}
            />
         );
      });

      // if (modal.length) {
      //    const modalBody = modal.modalContent?.map((item, idx) => (
      //       <BodyComponent key={idx} item={item} theme={data.theme} isModal />
      //    ));
      //    modal = (
      //       <Modal
      //          isOpen={isModalOpen}
      //          modalContainerId={isPreview && `slide-${idx}`}
      //          bg={data.theme === "LIGHT" ? "DARK" : "LIGHT"}
      //          color={data.theme === "LIGHT" ? colors.WHITE : colors.BLACK}
      //          title={modal.modalTitle}
      //          content={modalBody}
      //          onDismiss={onDismiss}
      //       />
      //    );
      // }
   }

   let children = [];
   let textParamCount = 0;

   // if (data.body) {
   //    data.body.forEach((item, idx) => {
   //       children.push(
   //          <BodyComponent
   //             key={idx}
   //             item={item}
   //             theme={data.theme}
   //             colorTheme={colorTheme}
   //             onHover={onHover}
   //             onHoverOut={onHoverOut}
   //             onClick={onClick}
   //             textParamCount={textParamCount}
   //          />
   //       );
   //       textParamCount += item.textParams?.length;
   //    });
   // }

   if (slideBody?.length) {
      slideBody.forEach((item, idx) => {
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
            />
         );
         // textParamCount += item.textParams?.length;
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
