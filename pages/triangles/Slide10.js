import dynamic from "next/dynamic";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const SlideWrap = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const TextSpan = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpan)
);

const bg = "assets/purple_bg.png";
const angle_sum = "assets/angle_sum.svg";
const triangle_inequality = "assets/triangle_inequality.svg";
const pythogoras = "assets/pythogoras.svg";

const Slide4 = () => {
   return (
      <SlideWrap bg="DARK" alignItems="center">
         <Title
            marginBottom="50px"
            fontWeight={700}
            fontSize="2.5rem"
            color="white"
            small
         >
            Properties of triangles
         </Title>
         <Flex justifyContent="space-between" alignItems="center" width="70%">
            <Flex direction="column">
               <StyledImg src={angle_sum} marginBottom="30px"></StyledImg>
               <TextSpan color="white" fontWeight={400}>
                  Angle sum property
               </TextSpan>
            </Flex>
            <Flex direction="column">
               <StyledImg
                  src={triangle_inequality}
                  transform="translateY(-8px)"
                  marginBottom="10px"
               ></StyledImg>
               <TextSpan color="white" fontWeight={400}>
                  Triangle inequality property
               </TextSpan>
            </Flex>
            <Flex direction="column">
               <StyledImg
                  src={pythogoras}
                  transform="translateY(-50px)"
               ></StyledImg>
               <TextSpan
                  color="white"
                  transform="translateY(-20px)"
                  fontWeight={400}
               >
                  Pythogoras theorem
               </TextSpan>
            </Flex>
         </Flex>
      </SlideWrap>
   );
};

export default Slide4;
