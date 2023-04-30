import axios from "axios";
import { useEffect, useState } from "react";

import { IDomesticAnimal } from "../../../model/HomelyFriend";
import {  Domestic_Animal_List_Detail } from "./Homely_Friends_Infos";
import { Domestic_Animal_List } from "./Homely_Friends_Sort";

type TDomesticAnimalState = {
  loading: boolean;
  error: boolean;
  animals: IDomesticAnimal[] | null;
};

export const Domestic_Animals = () => {
  const [domesticanimalState, setDomesticAnimalState] = useState<TDomesticAnimalState>({
    loading: false,
    error: false,
    animals: null,
  });

  const fetchDomesticAnimals = async () => {
    setDomesticAnimalState({
      ...domesticanimalState,
      loading: true,
    });
    

    try {
      const res = await axios.get(`http://localhost:3000/animal`);
      const data: IDomesticAnimal[] = res.data;
      setDomesticAnimalState({
        ...domesticanimalState,
        animals: data,
        loading: false,
      });
    } catch (e) {
      setDomesticAnimalState({
        ...domesticanimalState,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    fetchDomesticAnimals();
  }, []);

  return (
    <div className="domestic-animals">
      <h1>Domestic Animals</h1>
      <div className="domestic-animals-list">
        {domesticanimalState.loading && "Loading"}
        {domesticanimalState.error && "Error"}

        {domesticanimalState.animals?.length === 0 && "No animals found"}
        {domesticanimalState.animals?.map((animal) => (
          < Domestic_Animal_List key={animal._id} animal={animal} />
                 ))}
      </div>
    </div>
  );
};