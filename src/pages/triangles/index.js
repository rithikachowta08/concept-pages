import { PageWrap } from "components/StyledElements";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import { FullPageCustomWrapper } from "components/FullPageCustomWrapper";
import Slide3 from "./Slide3";

export const Triangles = () => {
  const SlideArray = [<Slide1 key={0} />, <Slide2 key={1} />, <Slide3 key={2} />];

  const SlideNameList = ["Slide1", "Slide2", "Slide3"];

  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      slidesNamesList={SlideNameList}
    />
  );
};
