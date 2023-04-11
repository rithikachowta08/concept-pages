import json from "components/dynamic-page/structure.json";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("components/dynamic-page/Page"));

const DynamicPage = () => {
   return <Page json={json}></Page>;
};

export default DynamicPage;
