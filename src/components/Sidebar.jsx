import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-[#201c1c] h-[100vh] flex flex-col items-center pt-8 border-r-4 border-r-gray-">
      <Link to="/" className="text-4xl font-bold px-4 py-8">
        Homepage
      </Link>
      <Link to="/create" className="text-4xl font-bold px-4 py-8">
        Create
      </Link>
      <Link to="/view" className="text-4xl font-bold px-4 py-8">
        View
      </Link>
    </div>
  );
};

export default Sidebar;
