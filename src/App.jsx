import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateChannel from "./pages/CreateChannel";
import Channel from "./pages/Channel";
import UploadVideo from "./pages/UploadVideo";


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
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-channel" element={<CreateChannel />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/upload" element={<UploadVideo />} />


        </Routes>
      </div>
    </>
  );
};

export default App;
