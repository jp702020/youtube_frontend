const VideoCard = ({ video }) => {
  return (
    <div className="cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full rounded-xl"
        />

        {/* Duration */}
        <span
          className="absolute bottom-2 right-2
                     bg-black text-white text-xs
                     px-1 rounded"
        >
          {video.duration}
        </span>
      </div>

      {/* Details */}
      <div className="flex gap-3 mt-3">
        {/* Channel avatar */}
        <img
          src={video.channelAvatar}
          alt="channel"
          className="w-9 h-9 rounded-full"
        />

        {/* Text */}
        <div>
          <h3 className="font-medium text-sm line-clamp-2">
            {video.title}
          </h3>

          <p className="text-gray-600 text-xs mt-1">
            {video.channelName}
          </p>

          <p className="text-gray-600 text-xs">
            {video.views} views • {video.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
