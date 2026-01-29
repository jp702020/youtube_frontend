import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { uploadToCloudinary } from "../services/cloudinary";
import { AuthContext } from "../context/AuthContext";

const Channel = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [channel, setChannel] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbFile, setThumbFile] = useState(null);
  const [title, setTitle] = useState("");

  const fetchChannel = async () => {
    const res = await API.get(`/channels/${id}`);
    setChannel(res.data);
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  const uploadVideo = async () => {
    const videoUrl = await uploadToCloudinary(videoFile, "video");
    const thumbnailUrl = await uploadToCloudinary(thumbFile, "image");

    await API.post("/videos", {
      title,
      videoUrl,
      thumbnailUrl,
      category: "Education",
      channelId: id
    });

    fetchChannel();
  };

  if (!channel) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl">{channel.channelName}</h1>

      {user && (
        <>
          <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files[0])} />
          <input type="file" accept="image/*" onChange={e => setThumbFile(e.target.files[0])} />
          <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
          <button onClick={uploadVideo}>Upload</button>
        </>
      )}
    </div>
  );
};

export default Channel;
