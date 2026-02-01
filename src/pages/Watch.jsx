import VideoPlayer from "../components/watch/VideoPlayer";
import VideoMeta from "../components/watch/VideoMeta";
import Description from "../components/watch/Description";
import Comments from "../components/watch/Comments";
import SuggestedVideos from "../components/watch/SuggestedVideos";

const Watch = () => {
  return (
    <div className="px-6 py-4 flex gap-6">
      {/* LEFT */}
      <div className="w-full lg:w-[70%]">
        <VideoPlayer />
        <VideoMeta />
        <Description />
        <Comments />
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default Watch;
