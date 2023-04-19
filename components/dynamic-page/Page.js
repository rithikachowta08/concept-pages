import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide = dynamic(() => import("../../components/dynamic-page/Slide"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

function range(start, end) {
   return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
}

const TitleSlideComponent = ({
   title,
   colorTheme,
   anchorIdxes,
   sections,
   moveToSection,
   downIcon,
}) => {
   return (
      <TitleSlide
         title={title}
         colorTheme={colorTheme}
         anchorIdxes={anchorIdxes}
         contentListItems={sections}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

const Page = ({ json }) => {
   if (json.slides) {
      const sections = Array.from(
         new Set(json.slides.map((slide) => slide.section))
      );
      const navSections = sections.map((section) => ({
         name: section,
         startingSlideIndex:
            json.slides.findIndex((slide) => slide.section === section) + 1,
      }));
      const SlideArray = [
         <TitleSlideComponent
            key={0}
            colorTheme={json.colorTheme}
            type={SLIDE_TYPES.TITLE_SLIDE}
            anchorIdxes={navSections.map((item) => item.startingSlideIndex + 1)}
            sections={navSections.map((item) => item.name)}
            title={json.title}
         />,
      ];
      json.slides.forEach((slide, idx) => {
         SlideArray.push(
            <Slide
               key={idx + 1}
               idx={idx}
               data={slide}
               colorTheme={json.colorTheme}
            />
         );
      });

      SlideArray.push(
         // TODO: Fix this
         <div style={{ height: "100%", width: "100%", position: "absolute" }}>
            <PageLastSlide
               colorTheme={json.colorTheme}
               type={SLIDE_TYPES.CONCLUSION}
               key={json.slides.length}
               currentPageTitle={json.title}
               nextPageTitle={json.nextPageTitle}
               nextPageLink={`/us/math/study/concept/${json.nextPageUrl}`}
            />
         </div>
      );

      /* Dark BG indexing logic */
      let darkBgIndices = [];
      SlideArray.forEach((slide, idx) => {
         console.log(json.slides[idx - 1]?.theme);
         if (
            idx === SlideArray.length - 1 ||
            json.slides[idx - 1]?.template === SLIDE_TYPES.VIDEO_ONLY ||
            json.slides[idx - 1]?.theme === "DARK"
         ) {
            darkBgIndices.push(idx);
         }
      });

      /* Nav sections logic */
      const navInfo = navSections.map((section, idx) => ({
         title: section.name,
         slides: range(
            section.startingSlideIndex,
            idx === navSections.length - 1
               ? json.slides.length
               : navSections[idx + 1].startingSlideIndex
         ),
      }));

      return (
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navInfo}
            darkBgIndices={darkBgIndices}
         />
      );
   }
};

export default Page;
