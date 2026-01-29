import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await API.get(`/videos${search}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [search]);

  return (
    <div className="min-h-screen bg-white dark:bg-black p-4">
      {videos.length === 0 ? (
        <p className="text-center text-gray-500">
          No videos found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
