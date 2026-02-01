import { createContext, useEffect, useState } from "react";
import API from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      fetchMyChannel();
    }
  }, []);

  const fetchMyChannel = async () => {
    try {
      const res = await API.get("/channels/me/channel");
      setChannel(res.data); // null or channel
    } catch (err) {
      setChannel(null);
    }
  };

  const login = async (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
    await fetchMyChannel();
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setChannel(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, channel, fetchMyChannel, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
