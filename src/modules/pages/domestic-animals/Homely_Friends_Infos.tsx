import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IHomelyFriend } from "../../../model/HomelyFriend";
import { checkYears, VisualizeAge } from "../../../utils/Utility-Functions";
import { URL } from '../../../API_URL';
import { Homely_Friend_Remove } from "./Homely_Friends_Remove";


type THomelyFriendStateII = {
  
  retrevingData: boolean;
  error: boolean;
  homely_friend: IHomelyFriend | null;
};

export const Homely_Friend_Infos = () => {
  
  const params = useParams();
  const navigate = useNavigate();

  const _id = params._id;


const [homelyFriendState, setHomelyFriendState] =
    
      useState<THomelyFriendStateII>({
      
      homely_friend: null,
      retrevingData: false,
      error: false,
    });



  const fetchHomelyFriend = async () => {
    
    setHomelyFriendState ({
      
      ...homelyFriendState,
      retrevingData: true,
    });

    
    try {
      
    const ask = await axios.get(`${URL}/animal/${_id}`);
    const data : IHomelyFriend = ask.data;
      
    setHomelyFriendState ({
        ...homelyFriendState,
        
        retrevingData: false,
        homely_friend: data,
      });
    
    } catch (er) {
      
      setHomelyFriendState ({
        ...homelyFriendState,
        
        retrevingData: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    
  fetchHomelyFriend();
  
  }, []);

  
  
  return (
    
    <div className="homely_friends_infos">
      
      {homelyFriendState.retrevingData && "Retrieving Data"}
      
      {homelyFriendState.error && "Error Retrieving Data "}
      
      {homelyFriendState.homely_friend &&
      ` ${VisualizeAge (checkYears (homelyFriendState.homely_friend.birthdate))}`}
      
      {homelyFriendState.homely_friend && <>

      <label className='all infos'>
        
        <h2>Identifier : {homelyFriendState.homely_friend?._id} </h2>
      
      </label>

      <label className='all infos'>

        <img src={homelyFriendState.homely_friend?.imgUrl} alt='homely friend picture'/>
      
      </label>

      <label className='all infos'>

        <h2>Name : {homelyFriendState.homely_friend?.name}</h2>
      
      </label>

      <label className='all infos'>
        
        <h2>Type : {homelyFriendState.homely_friend?.type}</h2>

      </label>

      <div className='all infos'>

        <div>Pedigree : {homelyFriendState.homely_friend?.pedigree}</div>

      </div>

    <div className='all infos'>

      <div>Breed : {homelyFriendState.homely_friend?.breed}</div>

    </div>


    <div className='all infos'>

      <div>Description : {homelyFriendState.homely_friend?.description}</div>

    </div>

    <div className='all infos'>

      <div>Created At : {homelyFriendState.homely_friend?.created_at}</div>

    </div>


    <div className='all infos'>

        <div>Updated At : {homelyFriendState.homely_friend?.updated_at}</div>

    </div>

      <div className='Modify Button'>

        <button disabled={homelyFriendState.retrevingData} 
        
        onClick={ ()=> navigate ('/animal/${homelyFriendState.homely_friend?._id}/modify')}>

        Modify
        </button>
      
<Homely_Friend_Remove homely_friend= {homelyFriendState.homely_friend}/>


      </div>


    </>}
      
      </div>
  );
};
