import { BrowserRouter } from "react-router-dom";
import Router from "services/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
        <ToastContainer
          theme="colored"
          position="bottom-right"
          hideProgressBar={true}
          closeButton={false}
          autoClose={3000}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
