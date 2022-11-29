import { Routes, Route } from "react-router-dom";
import { Triangles } from "pages/triangles";
import { AreaOfRectangle } from "pages/area-of-rectangle";

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
    </Routes>
  );
};

export default Router;
