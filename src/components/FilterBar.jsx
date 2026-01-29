const categories = [
  "All",
  "Music",
  "Coding",
  "Movies",
  "Gaming",
  "Education",
  "News"
];

const FilterBar = ({ selected, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
            selected === cat
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
