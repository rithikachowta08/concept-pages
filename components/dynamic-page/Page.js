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
   anchorIdxes,
   sections,
   moveToSection,
   downIcon,
}) => {
   return (
      <TitleSlide
         title={title}
         anchorIdxes={anchorIdxes}
         contentListItems={sections}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

const Page = ({ json }) => {
   if (json.slides) {
      const SlideArray = [
         <TitleSlideComponent
            key={0}
            type={SLIDE_TYPES.TITLE_SLIDE}
            anchorIdxes={json.navSections.map(
               (item) => item.firstSlideIndex + 2
            )}
            sections={json.navSections.map((item) => item.name)}
            title={json.title}
         ></TitleSlideComponent>,
      ];
      json.slides.forEach((slide, idx) => {
         SlideArray.push(<Slide key={idx + 1} data={slide} json={json} />);
      });

      SlideArray.push(
         <PageLastSlide
            type={SLIDE_TYPES.CONCLUSION}
            key={json.slides.length}
            currentPageTitle={json.title}
            nextPageTitle={json.nextPageTitle}
            nextPageLink={json.nextPageUrl}
         />
      );

      let darkBgIndices = [];
      json.slides.forEach((slide, idx) => {
         if (slide.theme === "DARK") {
            darkBgIndices.push(idx);
         }
      });
      const navSections = json.navSections.map((section, idx) => ({
         title: section.name,
         slides: range(
            section.firstSlideIndex + 1,
            idx === json.navSections.length - 1
               ? json.slides.length
               : json.navSections[idx + 1].firstSlideIndex
         ),
      }));
      return (
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navSections}
            darkBgIndices={darkBgIndices}
         />
      );
   }
};

export default Page;
