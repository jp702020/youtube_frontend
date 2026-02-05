import { createContext, useEffect, useState } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("videos");
    if (saved) setVideos(JSON.parse(saved));
  }, []);

  const addVideo = (video) => {
    const updated = [video, ...videos];
    setVideos(updated);
    localStorage.setItem("videos", JSON.stringify(updated));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
