import { createClient } from "@supabase/supabase-js";
import LCModel from "../assets/lcmodel.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {
  const supabaseUrl = "https://sicypnqtqsrznvldzfqv.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data, error } = await supabase.from("Character").select("*");

      if (error) {
        console.log("Error fetching characters", error);
      } else {
        setCharacters(data);
        console.log("Characters fetched successfully", data);
      }
    };

    getCharacters();
  }, []);

  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold mb-8 px-8">
          View Your{" "}
          <span className="bg-gradient-to-r from-green-600 via-orange-500 to-blue-400 inline-block text-transparent bg-clip-text">
            Characters!
          </span>
        </h1>
      </div>
      <div>
        {characters.length > 0 ? (
          <div className="grid grid-cols-3 gap-12">
            {characters.map((character) => (
              <Link
                to={`${character.id}`}
                key={character.id}
                className={`bg-[#201c1c] p-4 rounded-md flex flex-col items-center border-2 border-white shadow-lg ${
                  character.suit === "Bee"
                    ? "shadow-yellow-700"
                    : character.suit === "Bunny"
                    ? "shadow-pink-100"
                    : `shadow-${character.suit.toLowerCase()}-500`
                }`}
              >
                <img
                  src={LCModel}
                  alt="lcmodel"
                  className="w-[16rem] h-[16rem]"
                />
                <h2 className="text-3xl font-bold mt-4">{character.name}</h2>
                <p className="text-2xl mt-2">Items: {character.items}</p>
                <p className="text-2xl mt-2">Suit: {character.suit}</p>

                <Link
                  to={`/edit/${character.id}`}
                  className="w-72 h-16 bg-black text-2xl mt-8 p-4 rounded-md border-2 border-white"
                >
                  Edit this Character!
                </Link>
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="text-3xl">No characters found</h2>
        )}
      </div>
    </div>
  );
};

export default View;
