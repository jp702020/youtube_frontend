import VideoCard from "../components/VideoCard";
import Categories from "../components/Categories";

const dummyVideos = [
  {
    id: 1,
    title: "Learn React in 30 Minutes",
    thumbnail: "https://picsum.photos/400/225?random=1",
    channelName: "Code With John",
    channelAvatar: "https://i.pravatar.cc/150?img=11",
    views: "1.2M",
    time: "2 months ago",
  },
  {
    id: 2,
    title: "JavaScript Interview Questions",
    thumbnail: "https://picsum.photos/400/225?random=2",
    channelName: "Dev Talks",
    channelAvatar: "https://i.pravatar.cc/150?img=12",
    views: "800K",
    time: "3 weeks ago",
  },
];

const Home = () => {
  return (
    <>
      <Categories />

      <div
        className="px-6 mt-4 grid gap-6
                   grid-cols-1 sm:grid-cols-2
                   md:grid-cols-3 lg:grid-cols-4"
      >
        {dummyVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default Home;
