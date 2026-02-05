import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadVideo = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!videoFile || !thumbnailFile) {
      alert("Please select video and thumbnail");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", videoFile);
    formData.append("thumbnail", thumbnailFile);
    formData.append("channelId", "CHANNEL_ID_HERE");

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/videos/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      navigate("/channel");
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Upload Video</h1>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="block mb-2 font-medium">Video File</label>
      <input
        type="file"
        accept="video/*"
        className="mb-4"
        onChange={(e) => setVideoFile(e.target.files[0])}
      />

      <label className="block mb-2 font-medium">Thumbnail Image</label>
      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={(e) => setThumbnailFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadVideo;
