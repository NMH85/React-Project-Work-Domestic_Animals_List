import { IHomelyFriend } from "../../../model/HomelyFriend";
import { Link } from "react-router-dom";


type Props = {
  homely_friend: IHomelyFriend;
};

export const HomelyFriendSorting = (props: Props) => {
  const homely_friend = props.homely_friend;

  

  
  return (
    <div className="Homely-Friends-Sort">
    
    <div className= "Basic Infos">

      <img src= {homely_friend.imgUrl} alt='homely friend picture'/>

      <b>Name: {homely_friend.name}</b>
      
      <p>Breed: {homely_friend.breed}</p>
      
      <p>Type: {homely_friend.type}</p>
      
      <p>Born On: {homely_friend.birthDate}</p>

      <p>Pedigree: {homely_friend.pedigree ? 'YES' : 'NO'}</p>

      
      <Link to={`/animal/${homely_friend._id}`} state={homely_friend}>
        
        <button>MORE INFORMATIONS</button>
        
        </Link> 
       
    </div>

    </div>
  );
};