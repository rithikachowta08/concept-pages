import { Routes, Route } from "react-router-dom";
import Triangles from "pages/triangles";
import { VolumeOfCube } from "pages/volume-of-cube";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/triangles"
        element={<Triangles />}
      />
      <Route
        path="/volume-of-cube"
        element={<VolumeOfCube />}
      />
    </Routes>
  );
};

export default Router;
