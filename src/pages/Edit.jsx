import Bee from "../assets/beelc.webp";
import Bunny from "../assets/bunnylc.webp";
import Blue from "../assets/bluelc.webp";
import Green from "../assets/greenlc.webp";
import Orange from "../assets/orangelc.webp";
import Purple from "../assets/purplelc.webp";
import Yellow from "../assets/yellowlc.webp";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  console.log(id);
  const supabaseUrl = "https://sicypnqtqsrznvldzfqv.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [character, setCharacter] = useState(null);
  const [name, setName] = useState("");
  const [itemsCollected, setItemsCollected] = useState("");
  const [suitStyle, setSuitStyle] = useState("");

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

  const handleSuitChange = (e) => {
    setSuitStyle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Character")
      .update({
        name: name,
        items: itemsCollected,
        suit: suitStyle,
      })
      .eq("id", id);

    if (error) {
      console.log("Error inserting character", error);
    } else {
      console.log("Character inserted successfully", data);
      alert("Character updated successfully!");
    }
  };

  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold mb-8 px-8">
          Edit {""}
          <span className="bg-gradient-to-r from-red-600 via-blue-500 to-purple-400 inline-block text-transparent bg-clip-text">
            {character && character.name}
          </span>
        </h1>
      </div>
      <div>
        <div className="ml-[19rem] w-[7%] flex">
          <img src={Blue} alt="blue" />
          <img src={Green} alt="green" />
          <img src={Orange} alt="orange" />
          <img src={Purple} alt="purple" />
          <img src={Yellow} alt="yellow" />
          <img src={Bee} alt="bee" />
          <img src={Bunny} alt="bunny" />
        </div>
      </div>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-[20rem] h-[8rem] bg-[#201c1c] flex flex-col justify-center items-center">
            <label className="text-3xl font-bold" htmlFor="name">
              Name:
            </label>
            <input
              className="bg-gray-400 rounded-md mt-2 text-center placeholder-[#ffffffde] placeholder:font-bold placeholder:text-center"
              id="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-[20rem] h-[20rem] bg-[#201c1c] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold" htmlFor="suit">
              Suit Style: {suitStyle}
            </h1>
            <div className="mt-2 flex flex-col items-start">
              <div>
                <input
                  type="radio"
                  id="blue"
                  name="selected_suit"
                  value="Blue"
                  onClick={handleSuitChange}
                />
                <label htmlFor="blue" className="text-xl">
                  Blue
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="green"
                  name="selected_suit"
                  value="Green"
                  onClick={handleSuitChange}
                />
                <label htmlFor="green" className="text-xl">
                  Green
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="orange"
                  name="selected_suit"
                  value="Orange"
                  onClick={handleSuitChange}
                />
                <label htmlFor="orange" className="text-xl">
                  Orange
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="purple"
                  name="selected_suit"
                  value="Purple"
                  onClick={handleSuitChange}
                />
                <label htmlFor="purple" className="text-xl">
                  Purple
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="yellow"
                  name="selected_suit"
                  value="Yellow"
                  onClick={handleSuitChange}
                />
                <label htmlFor="yellow" className="text-xl">
                  Yellow
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="bee"
                  name="selected_suit"
                  value="Bee"
                  onClick={handleSuitChange}
                />
                <label htmlFor="bee" className="text-xl">
                  Bee
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="bunny"
                  name="selected_suit"
                  value="Bunny"
                  onClick={handleSuitChange}
                />
                <label htmlFor="bunny" className="text-xl">
                  Bunny
                </label>
              </div>
            </div>
          </div>

          <div className="w-[20rem] h-[8rem] bg-[#201c1c] flex flex-col justify-center items-center">
            <label className="text-3xl font-bold" htmlFor="items">
              # Items Collected:
            </label>
            <input
              className="bg-gray-400 rounded-md mt-2 text-center placeholder-[#ffffffde] placeholder:font-bold placeholder:text-center border-gray-400"
              id="items"
              type="text"
              placeholder="Enter # Items Collected"
              value={itemsCollected}
              onChange={(e) => setItemsCollected(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-84 bg-black text-3xl mt-8 p-4 rounded-md border-2 border-white"
        >
          Update Character
        </button>
      </form>
    </div>
  );
};

export default Edit;
