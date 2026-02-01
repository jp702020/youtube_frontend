import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      {/* GLOBAL HEADER */}
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* GLOBAL SIDEBAR */}
      <Sidebar open={sidebarOpen} />

      {/* MAIN CONTENT */}
      <div
        className={`pt-14 transition-all
          ${sidebarOpen ? "ml-56" : "ml-0"}`}
      >
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
