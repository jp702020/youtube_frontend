import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Comment from "../components/Comment";
import { AuthContext } from "../context/AuthContext";

const VideoPlayer = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchVideo = async () => {
    const res = await API.get(`/videos/${id}`);
    setVideo(res.data);
  };

  const fetchComments = async () => {
    const res = await API.get(`/comments/${id}`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchVideo();
    fetchComments();
  }, [id]);

  const handleLike = async () => {
    await API.post(`/videos/${id}/like`);
    fetchVideo();
  };

  const handleDislike = async () => {
    await API.post(`/videos/${id}/dislike`);
    fetchVideo();
  };

  const addComment = async () => {
    if (!text.trim()) return;
    await API.post(`/comments/${id}`, { text });
    setText("");
    fetchComments();
  };

  if (!video) return <p className="p-4">Loading...</p>;

  return (
    <div className="flex-1 p-4 max-w-5xl">
      
      <video
        src={video.videoUrl}
        controls
        className="w-full rounded-lg bg-black"
      />

      
      <h1 className="mt-3 text-xl font-semibold">{video.title}</h1>
      <p className="text-sm text-gray-400 mt-1">{video.description}</p>

      
      <div className="flex gap-4 mt-3">
        <button
          onClick={handleLike}
          className="px-3 py-1 bg-gray-800 rounded"
        >
          👍 {video.likes}
        </button>
        <button
          onClick={handleDislike}
          className="px-3 py-1 bg-gray-800 rounded"
        >
          👎 {video.dislikes}
        </button>
      </div>

      
      <div className="mt-6">
        <h2 className="text-lg mb-2">
          {comments.length} Comments
        </h2>

        {user && (
          <div className="flex gap-2 mb-4">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a comment"
              className="flex-1 px-3 py-1 bg-gray-900 border border-gray-700 rounded"
            />
            <button
              onClick={addComment}
              className="px-3 py-1 bg-blue-600 rounded"
            >
              Comment
            </button>
          </div>
        )}

        {comments.map((c) => (
          <Comment
            key={c._id}
            comment={c}
            refresh={fetchComments}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
