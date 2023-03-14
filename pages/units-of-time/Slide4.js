import dynamic from "next/dynamic";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const NumberedList = dynamic(() => import("components/text/NumberedList"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         downIcon={downIcon}
         secondaryTitle="How do we measure Time?"
         title="Properties of Instruments"
         currentPageIdx={currentPageIdx}
      >
         <Paragraph>
            The instruments used to measure time must exhibit the following
            properties:
         </Paragraph>
         <NumberedList
            items={[
               "A constant and periodic action to record equal increments of time.",
               "It should display the result. ",
            ]}
         ></NumberedList>
      </TextAndAppletSlide>
   );
};

export default Slide4;
