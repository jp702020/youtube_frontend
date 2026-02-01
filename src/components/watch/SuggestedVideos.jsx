const videos = [
  {
    id: 1,
    title: "Tier 3 to Google 40LPA | 2024 Batch",
    thumbnail: "https://picsum.photos/200/120?random=11",
    channel: "Fraz",
    views: "56K",
    time: "8 days ago"
  },
  {
    id: 2,
    title: "₹16,000 vs ₹10,00,00,000 in India",
    thumbnail: "https://picsum.photos/200/120?random=12",
    channel: "Aevy TV",
    views: "1.1M",
    time: "2 weeks ago"
  }
];

const SuggestedVideos = () => {
  return (
    <div className="flex flex-col gap-4">
      {videos.map((v) => (
        <div key={v.id} className="flex gap-2 cursor-pointer">
          <img
            src={v.thumbnail}
            className="w-40 h-24 rounded-lg"
          />
          <div>
            <p className="text-sm font-medium line-clamp-2">
              {v.title}
            </p>
            <p className="text-xs text-gray-500">{v.channel}</p>
            <p className="text-xs text-gray-500">
              {v.views} views • {v.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedVideos;
