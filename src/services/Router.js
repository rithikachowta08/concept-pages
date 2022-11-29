import { Routes, Route } from "react-router-dom";
import { Triangles } from "pages/triangles";
import { AreaOfATriangle } from "pages/area-of-a-triangle";

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
    </Routes>
  );
};

export default Router;
