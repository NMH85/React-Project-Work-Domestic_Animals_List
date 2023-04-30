import { IHomelyFriend } from "../../../model/HomelyFriend";
import { useNavigate } from "react-router-dom";



type Props = {
  homely_friend: IHomelyFriend;
};

export const Homely_Friend_Sorting = (props: Props) => {
  const homely_friend = props.homely_friend;

  const navigate = useNavigate()
  
  return (
    <div className="Homely-Friends-Sort">
    
    <div className= "Basic Infos">

      <img src= {homely_friend.imgUrl} alt='homely friend picture'/>

      <b>Name: {homely_friend.name}</b>
      
      <p>Breed: {homely_friend.breed}</p>
      
      <p>Type: {homely_friend.type}</p>
      
      <p>BirthDate: {homely_friend.birthdate}</p>

      <p>Pedigree: {homely_friend.pedigree ? 'true' : 'false'}</p>

      
      <button onClick={() => navigate (`/animal/${homely_friend?._id}`)}>
        
      Infos </button>
      
      
      
      </div>

    </div>
  );
};