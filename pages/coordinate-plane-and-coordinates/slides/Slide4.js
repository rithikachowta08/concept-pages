import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title={"Movement Along Y-axis"}
         secondaryTitle={"What Is a Coordinate Plane?"}
         appletSrc={""}
         downIcon={downIcon}
      >
         <Paragraph>
            Further, if the bee moves along the y-axis, then its location is
            determined by the vertical distance traveled from the origin.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide4;
