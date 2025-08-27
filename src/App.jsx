import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSetting from "./Components/AccountSetting";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-setting" element={<AccountSetting />} />{" "}
        {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
