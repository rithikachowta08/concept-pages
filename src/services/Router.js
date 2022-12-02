import { Routes, Route } from "react-router-dom";
import { Triangles } from "pages/triangles";
import { AreaOfATriangle } from "pages/area-of-a-triangle";
import { VolumeOfCube } from "pages/volume-of-cube";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/triangles"
        element={<Triangles />}
      />
      <Route
        path="/area-of-a-triangle"
        element={<AreaOfATriangle />}
      />
      <Route
        path="/volume-of-cube"
        element={<VolumeOfCube />}
      />
    </Routes>
  );
};

export default Router;
