import { useState } from "react";

const useDiagramInteraction = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (idx) => {
      setActiveIndex(idx);
   };
   const onHoverOut = () => {
      setActiveIndex(0);
   };
   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   return { activeIndex, onHover, onHoverKatex, onHoverOut };
};

export default useDiagramInteraction;
