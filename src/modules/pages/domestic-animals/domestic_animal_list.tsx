import { IDomesticAnimal } from "../../../model/IDomesticAnimal";
import { Link } from "react-router-dom";

type Props = {
  animal: IDomesticAnimal;
};

export const Domestic_Animal_List = (props: Props) => {
  const animal = props.animal;

  return (
    <div className="domestic_animal_list">
      <b>Name: {animal.name}</b>
      <p>Breed: {animal.breed}</p>
      <p>Type: {animal.type}</p>
      <p>BirthDate: {animal.birthDate}</p>
      <Link to={`/animal/${animal._id}`} state={animal}>
        <b>Detail(domestic animal age)</b>
      </Link>
    </div>
  );
};