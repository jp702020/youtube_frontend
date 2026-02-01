import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
          {video.duration}
        </span>
      </div>

      <div className="flex gap-3 mt-3">
        <img
          src={video.channelAvatar}
          className="w-9 h-9 rounded-full"
        />

        <div>
          <h3 className="font-medium text-sm line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600">
            {video.channelName}
          </p>
          <p className="text-xs text-gray-600">
            {video.views} • {video.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
