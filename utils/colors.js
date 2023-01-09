export const colors = {
   GREEN: "#4DCB88",
   OCEAN_GREEN: "#9EFFB6",
   LIGHT_RED: "#FFD1D1",
   RED: "#EA6560",
   WHITE: "#ffffff",
   DARK_BLUE: "#4A33F5",
   DARK_GREY: "#333333",
   BLACK: "#000000",
   AQUA: "#67DBE8",
   DARK_AQUA: "#56B7C8",
   YELLOW: "#fec429",
   PURPLE: "#4A33F5",
   PILL_BLUR:'#c8c8c833',
   PILL_SOLID:'#cccccc',
   LAVENDER: "#F2A4FF",
};

export const hexToRgbA = (hex, alpha = 1) => {
   if (alpha > 1) alpha = 1;
   if (alpha < 0) alpha = 0;
   var c;
   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
         c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
         "rgba(" +
         [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
         "," +
         alpha +
         ")"
      );
   }
   return hex;
};
