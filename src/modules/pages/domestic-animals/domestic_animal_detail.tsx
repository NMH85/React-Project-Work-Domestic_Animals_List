import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IDomesticAnimal } from "../../../model/IDomesticAnimal";
import { calcAge, ShowAge } from "../../../utils/shared-functions";

type TDomesticAnimalStateNow = {
  animal: IDomesticAnimal | null;
  loading: boolean;
  error: boolean;
};

export const Domestic_Animal_List_Detail = () => {
  const params = useParams();
  const location = useLocation();

  const _id = params._id;

  const animal: IDomesticAnimal = location.state;

  const [AnimalStateNow, setAnimalStateNow] =
    useState<TDomesticAnimalStateNow>({
      animal,
      loading: false,
      error: false,
    });

  const fetchDomesticAnimalById = async () => {
    setAnimalStateNow({
      ...AnimalStateNow,
      loading: true,
    });

    try {
      const res = await axios.get(`http://localhost:3000/animal/${_id}`);

      setAnimalStateNow({
        ...AnimalStateNow,
        loading: false,
        animal: res.data,
      });
    } catch (e) {
      setAnimalStateNow({
        ...AnimalStateNow,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    !animal && fetchDomesticAnimalById();
  }, []);

  return (
    <div className="domestic_animal-details">
      {AnimalStateNow.loading && "Loading"}
      {AnimalStateNow.error && "Error loading "}
      {AnimalStateNow.animal &&
        /*The id for the selected pet is "${currentAnimalState.animal._id}"*/
        ` ${ShowAge(calcAge(AnimalStateNow.animal.birthDate))}`}
    </div>
  );
};
