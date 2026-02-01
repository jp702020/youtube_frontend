const categories = [
  "All",
  "Music",
  "JavaScript",
  "React",
  "Live",
  "Gaming",
  "Movies",
  "Podcasts"
];

const Categories = () => {
  return (
    <div className="flex gap-3 px-6 py-3 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          className="bg-gray-100 px-4 py-1 rounded-full text-sm whitespace-nowrap"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
