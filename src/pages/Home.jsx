import VideoCard from "../components/VideoCard";
import Categories from "../components/Categories";

const dummyVideos = [
  {
    id: 1,
    title: "The Most Beautiful Earth Video You'll Ever See in 4K HDR",
    thumbnail: "https://picsum.photos/400/225?random=1",
    duration: "30:27",
    channelName: "8K Vision",
    channelAvatar: "https://i.pravatar.cc/150?img=11",
    views: "7.2M",
    time: "2 months ago",
  },
  {
    id: 2,
    title: "Honest Talk With Google Recruiter | Job Market Reality",
    thumbnail: "https://picsum.photos/400/225?random=2",
    duration: "46:00",
    channelName: "Career Talks",
    channelAvatar: "https://i.pravatar.cc/150?img=12",
    views: "1.1M",
    time: "3 weeks ago",
  },
  {
    id: 3,
    title: "September 11th, That One Day (Sensitive Content)",
    thumbnail: "https://picsum.photos/400/225?random=3",
    duration: "6:26",
    channelName: "History Hub",
    channelAvatar: "https://i.pravatar.cc/150?img=13",
    views: "3.4M",
    time: "1 year ago",
  },
  {
    id: 4,
    title: "Mastering Three.js Autofocus Component",
    thumbnail: "https://picsum.photos/400/225?random=4",
    duration: "11:42",
    channelName: "Dev World",
    channelAvatar: "https://i.pravatar.cc/150?img=14",
    views: "520K",
    time: "5 days ago",
  }
];

const Home = () => {
  return (
    <div className="pt-0">
      {/* Category buttons (below header) */}
      <Categories />

      {/* Video grid */}
      <div className="px-6 mt-4 grid gap-6
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4">
        {dummyVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
