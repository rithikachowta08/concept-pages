import useMediaQuery from "hooks/useMediaQuery";

export const DEVICE_TYPES = {
   MOBILE: "MOBILE",
   TABLET: "TABLET",
   DESKTOP: "DESKTOP",
   HIGH_RES_DESKTOP: "HIGH_RES_DESKTOP",
};

export const ORIENTATION_TYPES = {
   PORTRAIT: "PORTRAIT",
   LANDSCAPE: "LANDSCAPE",
};

export const useDeviceType = () => {
   const isHighResDesktop = useMediaQuery("(min-width: 1224px)");
   const isDesktop = useMediaQuery(
      "(min-width: 992px) and (max-width: 1224px)"
   );
   const isTablet = useMediaQuery("(min-width: 821px) and (max-width: 992px)");
   const isMobile = useMediaQuery("(min-width: 200px) and (max-width: 820px)");
   if (isHighResDesktop) {
      return DEVICE_TYPES.HIGH_RES_DESKTOP;
   } else if (isDesktop) {
      return DEVICE_TYPES.DESKTOP;
   } else if (isMobile) {
      return DEVICE_TYPES.MOBILE;
   } else if (isTablet) {
      return DEVICE_TYPES.TABLET;
   }
};

export const useOrientation = () => {
   const isPortrait = useMediaQuery("(orientation: portrait)");
   const isLandscape = useMediaQuery("(orientation: landscape)");
   if (isPortrait) {
      return ORIENTATION_TYPES.PORTRAIT;
   } else if (isLandscape) {
      return ORIENTATION_TYPES.LANDSCAPE;
   }
};
