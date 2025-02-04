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
import Breastcancer from "./pages/modules/breastCancer/Breastcancer";
import { BreastCancerContext } from "./pages/modules/breastCancer/BreastCancerContext.jsx";
import ExportDataPage from "./pages/modules/breastCancer/ExportDataPage.jsx";
import SickleCell from "./pages/modules/sickleCell/SickleCell";
import ExportDataSickleCell from "./pages/modules/sickleCell/ExportData";
import ReportPage from "./pages/modules/dashboard/ReportPage";
import Cervicalcancer from "./pages/modules/cervicalcancer/Cervicalcancer"
import ExportCervicalData from "./pages/modules/cervicalcancer/ExportDataPage";

function App() {
  const [activeTab, setActiveTab] = useState("/dashboard");
  const [BreastCancerData, setBreastCancerData] = useState(false)
  const [CervicalCancerData, setCervicalCancerData] = useState(false)
    const [DashboardData, setDashboardData] = useState(false)

  return (
    <BreastCancerContext.Provider value={{ BreastCancerData, setBreastCancerData,setDashboardData,CervicalCancerData, setCervicalCancerData }}>
      <RecoilRoot>
        <Router>
          <Routes>
            {/* Public route for login */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected routes wrapped in ProtectedRoute component */}
            {/* <Route element={<ProtectedRoute />}> */}
            {DashboardData ? <Route
              path="/dashboard"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <ReportPage />
                </SuperAdminLayout>
              }
            /> : <Route
              path="/dashboard"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <Dashboard />
                </SuperAdminLayout>
              }
            />}
            {BreastCancerData ? <Route
              path="/breastCancer"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <ExportDataPage />
                </SuperAdminLayout>
              }
            /> : <Route
              path="/breastCancer"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <Breastcancer />
                </SuperAdminLayout>
              }
            />}
            <Route
              path="/sicklecell"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <SickleCell />
                </SuperAdminLayout>
              } />
            <Route
              path="/export-data"
              element={
                <SuperAdminLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  <ExportDataSickleCell />
                </SuperAdminLayout>
              } />
               {CervicalCancerData? <Route
            path="/cervicalcancer"
            element={
              <SuperAdminLayout
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                <ExportCervicalData />
              </SuperAdminLayout>
            } 
         />: <Route
         path="/cervicalcancer"
         element={
           <SuperAdminLayout
             activeTab={activeTab}
             setActiveTab={setActiveTab}
           >
             <Cervicalcancer />
           </SuperAdminLayout>
         } 
      />}
            {/* Catch all route - redirect to login */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </BreastCancerContext.Provider >
  );
}

export default App;
