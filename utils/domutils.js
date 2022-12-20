export function addTransitionToKatex(selector, onHover, onHoverOut) {
   return () =>
      setTimeout(() => {
         let transitionElements = Array.from(
            document.querySelectorAll(selector)
         );
         transitionElements.forEach((element) => {
            element.addEventListener("mouseenter", onHover);
            element.addEventListener("mouseleave", onHoverOut);
         });
      }, 100);
}
