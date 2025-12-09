import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/Dashboardlayout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="*" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
