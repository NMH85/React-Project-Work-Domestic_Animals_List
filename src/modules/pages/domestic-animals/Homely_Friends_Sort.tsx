import { IHomelyFriend } from "../../../model/HomelyFriend";
import { Link } from "react-router-dom";

type Props = {
  homely_friend: IHomelyFriend;
};

export const Homely_Friend_Sorting = (props: Props) => {
  const homely_friend = props.homely_friend;

  return (
    <div className="Homely-Friends-Sort">
      
      <b>Name: {homely_friend.name}</b>
      
      <p>Breed: {homely_friend.breed}</p>
      
      <p>Type: {homely_friend.type}</p>
      
      <p>BirthDate: {homely_friend.birthdate}</p>
      
      <Link to={`/animal/${homely_friend._id}`} state={homely_friend}>
        
        <b>Infos ( Homely Friend life Time )</b>
      </Link>
    </div>
  );
};