import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import GetStartedHomeView from "./Views/GetStartedHomeView";
import GetStartedWelcomeView from "./Views/GetStartedWelcomeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/GetStarted" element={<GetStartedHomeView />} />
          <Route
            path="/GetStartedWelcome"
            element={<GetStartedWelcomeView />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
