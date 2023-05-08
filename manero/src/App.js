import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import GetStartedHomeView from "./Views/GetStartedHomeView";
import GetStartedWelcomeView from "./Views/GetStartedWelcomeView";
import VerifyNumberView from "./Views/VerifyNumberView";
import ConfirmCodeView from "./Views/ConfirmCodeView";

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
          <Route path="/VerifyNumber" element={<VerifyNumberView />} />
          <Route path="/ConfirmCode" element={<ConfirmCodeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
