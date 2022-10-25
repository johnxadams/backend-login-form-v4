import { useContext } from "react";
// libraries
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

// components
import LoginPage from "./components/LoginPage/LoginPage";
import { MyContext } from "./components/MyContext";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);
const {loggedIn} = useContext(MyContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage  />} />
        {/* Does this code down here make sense? */}
        <Route path="/welcomepage" element={loggedIn ? <WelcomePage /> : <LoginPage />}  />
      </Routes>
    </div>
  );
}

export default App;
