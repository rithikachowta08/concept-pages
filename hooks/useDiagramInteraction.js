import { useState } from "react";

const useDiagramInteraction = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (idx) => {
      setActiveIndex(idx);
   };
   const onHoverOut = () => {
      setActiveIndex(0);
   };

   return { activeIndex, onHover, onHoverOut };
};

export default useDiagramInteraction;
