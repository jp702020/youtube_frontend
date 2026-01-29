const Sidebar = () => {
  return (
    <aside className="w-56 h-screen bg-black border-r border-gray-700 hidden md:block">
      <ul className="p-4 space-y-4">
        <li>Home</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
