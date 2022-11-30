import useMediaQuery from "hooks/useMediaQuery";

export const DEVICE_TYPES = {
  MOBILE: "MOBILE",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
  HIGH_RES_DESKTOP: "HIGH_RES_DESKTOP"
};

export const useDeviceType = () => {
  const isHighResDesktop = useMediaQuery("(min-width: 1224px)");
  const isDesktop = useMediaQuery("(min-width: 992px) and (max-width: 1224px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 992px)");
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 768px)");
  if (isHighResDesktop) {
    return DEVICE_TYPES.HIGH_RES_DESKTOP;
  } else if (isDesktop) {
    return DEVICE_TYPES.DESKTOP;
  } else if (isTablet) {
    return DEVICE_TYPES.TABLET;
  } else if (isMobile) {
    return DEVICE_TYPES.MOBILE;
  }
};
