import { useState, useEffect } from "react";
import axios from "axios";

import { BarSearch } from "./ComponentsFunc/barSeach";
import { PetsTypes } from "../hooks/TypesItens";
const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allAnimais, setAllAnimais] = useState<PetsTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/home");
        setAllAnimais(response.data);
        setLoading(true);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchResult = (result: any) => {
    setAllAnimais(result);
  };

  return (
    <div className=" m-auto">
      {/* Top Section */}
      <BarSearch onSearch={handleSearchResult} />
      <div className="h-[350px] bg-cover bg-center flex justify-center align-middle mb-8">
        <img
          className="w-full"
          src={`../../public/images/allanimals.jpg`}
          alt=""
        />
      </div>
      <div>
        <div>
          <div className="">
            <h2 className="flex text-[20px] justify-center mb-[30px]">
              Todos os Animais disponíveis para adoção
            </h2>
            {loading ? (
              Array.isArray(allAnimais) && allAnimais.length > 0 ? (
                <div className=" max-w-7xl mx-auto grid grid-cols-5 gap-4 ">
                  {allAnimais.map((item) => (
                    <div className=" w-full h-auto flex flex-col" key={item.id}>
                      <img
                        className="rounded h-[240px]"
                        src={`../../public/images/${item.image}`}
                        alt=""
                      />
                      <p className="text-[15px] font-bold mb-1 flex justify-start">
                        {item.name}
                      </p>
                      <span className="text-[13px] text-[#666]">
                        Cor:{item.color}
                      </span>
                      <span className="text-[13px] text-[#666]">
                        Gênero:{item.sex}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>Nenhum animal encontrado.</div>
              )
            ) : (
              <div>Carregando...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
