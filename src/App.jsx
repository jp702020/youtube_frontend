import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Header
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        loggedIn={loggedIn}
      />

      <Sidebar open={sidebarOpen} />

      <div className={`pt-14 ${sidebarOpen ? "ml-56" : "ml-0"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
