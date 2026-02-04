import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Login from "./pages/Login";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} />

      <div className={`pt-14 ${sidebarOpen ? "ml-56" : "ml-0"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
