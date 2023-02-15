import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IDomesticAnimal } from "../../../model/IDomesticAnimal";
import { TCurrentDomesticAnimalState } from "./D_animal_list_detail

import { DomesticAnimalForm } from "./DomesticAnimalForm";

export const EditDomesticAnimal = () => {
  const location = useLocation();
  const params = useParams();
  const _id = params._id;
  const animal: IDomesticAnimal = location.state;

  const [currentAnimalState, setCurrentAnimalState] =
    useState<TCurrentDomesticAnimalState>({
      animal,
      loading: false,
      error: false,
      saving:false,
      deleting:false,
      buttonclicked: false,
    });

  const fetchAnimalById = async () => {
    setCurrentAnimalState({
      ...currentAnimalState,
      loading: true,
    });

    try {
      const res = await axios.get(`http://localhost:3000/animal/${_id}`);

      setCurrentAnimalState({
        ...currentAnimalState,
        loading: false,
        animal: res.data,
      });
    } catch (e) {
      setCurrentAnimalState({
        ...currentAnimalState,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    !animal && fetchAnimalById();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {currentAnimalState.loading && "Loading"}
      {currentAnimalState.error && "Error loading "}
      {currentAnimalState.animal && (
        <DomesticAnimalForm defaultValues={currentAnimalState.animal} />
      )}
    </div>
  );
};