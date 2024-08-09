import { Route, Routes } from "react-router-dom";
import "./App.css";

import Auth from "./pages/Auth";
import ConfirmPage from "./pages/Confirm";
import HomePage from "./pages/Home";
import AuthProvider from "./providers/AuthProvider";
function App() {
  return (
    <Routes>
      <Route element={<AuthProvider />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth">
        <Route path="" element={<Auth />} />
        <Route path="confirm" element={<ConfirmPage />} />
      </Route>
    </Routes>
  );
}

export default App;
