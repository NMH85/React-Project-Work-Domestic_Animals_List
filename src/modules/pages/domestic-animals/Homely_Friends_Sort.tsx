import { IHomelyFriend } from "../../../model/HomelyFriend";
import { Link } from "react-router-dom";
import { Homely_Friend_Remove } from "./Homely_Friends_Remove";
import { checkYears, VisualizeAge } from "../../../utils/Utility-Functions";

type Props = {
  homely_friend: IHomelyFriend;
};

export const Homely_Friend_Sorting = (props: Props) => {
  const homely_friend = props.homely_friend;


  
  return (
    <div className="Homely-Friends-Sort">
    
    <div className= "Basic Infos">

      <img src= {homely_friend.imgUrl} alt='homely friend picture'/>

      <b>Name: {homely_friend.name}</b>
      
      <p>Breed: {homely_friend.breed}</p>
      
      <p>Type: {homely_friend.type}</p>
      
      <p>BirthDate: {`${VisualizeAge (checkYears (homely_friend.birthdate))}`}</p>

      <p>Pedigree: {homely_friend.pedigree ? 'true' : 'false'}</p>

      
      <Link to={`/animal/${homely_friend._id}`} state={homely_friend}>
        
        <button>Infos</button>
        
        </Link> 
       <Homely_Friend_Remove homely_friend={homely_friend}/>
    </div>

    </div>
  );
};