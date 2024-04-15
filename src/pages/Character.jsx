import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LCModel from "../assets/lcmodel.png";

const Character = () => {
  const { id } = useParams();
  const supabaseUrl = "https://sicypnqtqsrznvldzfqv.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const { data, error } = await supabase
        .from("Character")
        .select("*")
        .eq("id", id);

      if (error) {
        console.log("Error fetching character", error);
      } else {
        setCharacter(data[0]);
        console.log("Character fetched successfully", data);
      }
    };

    getCharacter();
  }, []);

  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold mb-8 px-8">
          {character && (
            <div>
              <span className="bg-gradient-to-r from-pink-600 via-green-500 to-purple-400 inline-block text-transparent bg-clip-text">
                Character:
              </span>
              {` ${character.name}`}
            </div>
          )}
        </h1>
      </div>
      <div>
        {character ? (
          <div className="flex flex-col items-center">
            {character && (
              <div
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
                  className="w-[24rem] h-[25rem]"
                />
              </div>
            )}
            <p className="text-4xl font-bold mt-8">Items: {character.items}</p>
            <p className="text-4xl font-bold mt-2">Suit: {character.suit}</p>
            <h2 className="text-4xl font-bold mt-2">
              Wanna Edit This Character? Now is your chance!
            </h2>
            <Link
              to={`/edit/${id}`}
              className="w-96 bg-black text-4xl mt-8 p-4 rounded-md border-2 border-white"
            >
              Edit this Character!
            </Link>
          </div>
        ) : (
          <h2 className="text-4xl">Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Character;
