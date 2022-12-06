import { Routes, Route } from "react-router-dom";
import Triangles from "pages/triangles";
import { AreaOfATriangle } from "pages/area-of-a-triangle";
import { AreaOfRectangle } from "pages/area-of-rectangle";
import { VolumeOfCube } from "pages/volume-of-cube";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/triangles"
        element={<Triangles />}
      />
      <Route
        path="/area-of-rectangle"
        element={<AreaOfRectangle />}
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
