const comments = [
  {
    id: 1,
    user: "nishantnlay3242",
    time: "3 weeks ago",
    text: "Pankhuri is a great recruiter... another well done interview!"
  },
  {
    id: 2,
    user: "sonudamale",
    time: "3 weeks ago",
    text: "Very informative video. Thanks for sharing!"
  }
];

const Comments = () => {
  return (
    <div>
      {/* Count */}
      <h2 className="text-lg font-medium mb-4">
        {comments.length} Comments
      </h2>

      {/* Add comment */}
      <div className="flex gap-3 mb-6">
        <img
          src="https://i.pravatar.cc/150?img=20"
          className="w-9 h-9 rounded-full"
        />
        <input
          placeholder="Add a comment..."
          className="border-b w-full outline-none"
        />
      </div>

      {/* Comment list */}
      {comments.map((c) => (
        <div key={c.id} className="flex gap-3 mb-6">
          <img
            src="https://i.pravatar.cc/150?img=21"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">
              {c.user} <span className="text-gray-500">{c.time}</span>
            </p>
            <p className="text-sm">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
