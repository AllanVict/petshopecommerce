import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BarSearch = ({
  onSearch,
}: {
  onSearch: (result: any) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const [selectOption, setSelecOption] = useState<string>(() => {
    const currentPathname = window.location.pathname;
    return currentPathname.substring(1);
  });
  const nav = useNavigate();

  const handleSeach = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      try {
        if (search.trim() !== "") {
          e.preventDefault();
          const response = await axios.post(
            "http://localhost:3000/search",
            JSON.stringify({ search, selectOption }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          onSearch(response.data);
        }
        if (search === "") {
          window.location.href = "/";
        }
      } catch (error) {
        alert("Mensagem não enviada");
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      handleSeach(e);
    }
  };
  const handleType = (e: string) => {
    setSelecOption(e);
    nav(`/${e.toLowerCase()}`);
  };

  return (
    <div>
      <div className="w-max-[1100px] flex items-center justify-between">
        <div className="text-3xl py-4 px-20">PetShop</div>
        <div className="p-3 mr-[300px]">
          <input
            className="p-1 px-3 border border-black mr-2 outline-none h-[30px]"
            type="text"
            onKeyDown={handleKeyPress}
            placeholder="Pesquisar..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex py-[15px] align-middle items-center justify-center bg-black">
        <ul className="flex w-[1100px] justify-around text-[white]">
          <li className="justify-center cursor-pointer">
            <button
              className="block w-[90px] h-[30px] hover:bg-slate-800 rounded-full"
              type="button"
              onClick={() => handleType("")}
            >
              Todos
            </button>
          </li>
          <li className="cursor-pointer ">
            <button
              className=" block w-[90px] h-[30px] hover:bg-slate-800 rounded-full"
              type="button"
              onClick={() => handleType("dog")}
            >
              Cachorros
            </button>
          </li>
          <li className="cursor-pointer">
            <button
              className="block w-[90px] h-[30px] hover:bg-slate-800 rounded-full"
              type="button"
              onClick={() => handleType("cat")}
            >
              Gatos
            </button>
          </li>
          <li className="cursor-pointer ">
            <button
              className="block w-[90px] h-[30px] hover:bg-slate-800 rounded-full"
              type="button"
              onClick={() => handleType("fish")}
            >
              Fishes
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
