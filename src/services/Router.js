import { Routes, Route } from "react-router-dom";
import { Triangles } from "pages/triangles";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/triangles"
        element={<Triangles />}
      />
    </Routes>
  );
};

export default Router;
