import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SuperAdminLayout from "./components/layouts/SuperAdminLayout";
import "./App.css";
import "./index.css";
//import About from "./pages/modules/About/About";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { RecoilRoot } from "recoil";
import ResetPassword from "./pages/auth/resetPassword/resetPassword";
import Dashboard from "./pages/modules/dashboard/Dashboard";

function App() {
  const [activeTab, setActiveTab] = useState("/dashboard");

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          {/* Public route for login */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected routes wrapped in ProtectedRoute component */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route
            path="/dashboard"
            element={
              <SuperAdminLayout
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                <Dashboard />
              </SuperAdminLayout>
            } 
         />

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
