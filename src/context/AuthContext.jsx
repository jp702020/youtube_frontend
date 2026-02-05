import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);

  // restore session
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedChannel = localStorage.getItem("channel");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedChannel) setChannel(JSON.parse(savedChannel));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setChannel(null);
    localStorage.clear();
  };

  const createChannel = (channelData) => {
    setChannel(channelData);
    localStorage.setItem("channel", JSON.stringify(channelData));
  };




  return (
    <AuthContext.Provider
      value={{ user, channel, login, logout, createChannel }}
    >
      {children}
    </AuthContext.Provider>
  );
};
