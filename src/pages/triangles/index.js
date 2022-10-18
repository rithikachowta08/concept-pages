import styled from "styled-components/macro";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import { FullPageCustomWrapper } from "components/FullPageCustomWrapper";

export const Triangles = () => {
  const SlideArray = [
    <Slide1 key={0} />,
    <Slide2 key={1} />,
    <Slide2 key={2} />,
    <Slide2 key={3} />
  ];

  const SlideNameList = ["Slide1", "Slide2", "Slide3", "Slide4"];

  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      slidesNamesList={SlideNameList}
    />
  );
};
