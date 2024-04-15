import Bee from "../assets/beelc.webp";
import Bunny from "../assets/bunnylc.webp";
import Blue from "../assets/bluelc.webp";
import Green from "../assets/greenlc.webp";
import Orange from "../assets/orangelc.webp";
import Purple from "../assets/purplelc.webp";
import Yellow from "../assets/yellowlc.webp";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold mb-8 px-8">
          Create Your Own{" "}
          <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 inline-block text-transparent bg-clip-text">
            Lethal Company Character!
          </span>
        </h1>
        <h2 className="text-3xl px-16">
          Here is where you can create your very own set of lethal company
          characters before sending them off into certain death!
        </h2>
      </div>
      <div className="mt-8 mr-[55rem] w-[12%] flex">
        <img src={Blue} alt="blue" />
        <img src={Green} alt="green" />
        <img src={Orange} alt="orange" />
        <img src={Purple} alt="purple" />
        <img src={Yellow} alt="yellow" />
        <img src={Bee} alt="bee" />
        <img src={Bunny} alt="bunny" />
      </div>
      <Link
        to="/create"
        className="w-64 bg-black text-4xl mt-8 p-4 rounded-md border-2 border-white"
      >
        Get started!
      </Link>
    </div>
  );
};

export default Homepage;
