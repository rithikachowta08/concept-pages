import { BrowserRouter } from "react-router-dom";
import Router from "services/Router";
import "App.scss";

const randomeData = ["hello", "h2", "h3"];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
