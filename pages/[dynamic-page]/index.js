import json from "components/dynamic-page/structure.json";
import dynamic from "next/dynamic";
// TEMP FIX
const Page = dynamic(() => import("components/dynamic-page/Page"), {
   ssr: false,
});

const DynamicPage = () => {
   return <Page json={json}></Page>;
};

export default DynamicPage;
