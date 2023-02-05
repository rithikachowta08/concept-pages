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

export function addClickTransitionToModalTriggerText(selector, onClick) {
   return () =>
      setTimeout(() => {
         let transitionElements = Array.from(
            document.querySelectorAll(selector)
         );
         transitionElements.forEach((element) => {
            element.addEventListener("click", onClick);
         });
      }, 100);
}
