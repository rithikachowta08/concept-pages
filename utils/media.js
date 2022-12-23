import { createMedia } from "@artsy/fresnel";

const ExampleAppMedia = createMedia({
   breakpoints: {
      xs: 0,
      sm: 400,
      md: 811,
      lg: 992,
      xl: 1224,
   },
});

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle(); // optional: .createMediaStyle(['at'])
export const { Media, MediaContextProvider } = ExampleAppMedia;
