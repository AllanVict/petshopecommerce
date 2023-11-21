import { useState, useEffect } from "react";
import axios from "axios";
import { PetsTypes } from "../../hooks/TypesItens";

export const ListFilter = () => {
  const [allAnimais, setAllAnimais] = useState<PetsTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cat`);
        const data = response.data;
        setAllAnimais(data);
        setLoading(true);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4">
      {loading ? (
        allAnimais.map((item) => (
          <div className="w-full h-auto flex flex-col" key={item.id}>
            <img
              className="rounded h-[240px]"
              src={`../../public/images/${item.image}`}
              alt=""
            />
            <p className="text-[15px] font-bold mb-1 flex justify-start">
              {item.name}
            </p>
            <span className="text-[13px] text-[#666]">Cor: {item.color}</span>
            <span className="text-[13px] text-[#666]">Gênero: {item.sex}</span>
          </div>
        ))
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};
