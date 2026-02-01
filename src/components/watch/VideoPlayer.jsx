const VideoPlayer = () => {
  return (
    <div className="w-full aspect-video bg-black rounded-xl mb-4">
      <video
        controls
        className="w-full h-full rounded-xl"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
};

export default VideoPlayer;
