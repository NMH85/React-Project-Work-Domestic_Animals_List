import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IHomelyFriend } from "../../../model/HomelyFriend";
import { checkYears, VisualizeAge } from "../../../utils/Utility-Functions";
import { URL } from '../../../API_URL';
import { HomelyFriendRemove } from "../../components/Homely-Friends-Remove";


type THomelyFriendCreateUpdate = {
  
  retrevingData: boolean;
  error: boolean;
  homely_friend: IHomelyFriend | null;
};

export const HomelyFriendInfos = () => {
  
  const check = useParams();
  const goTo = useNavigate();

  const _id = check._id;


const [homelyFriendState, setHomelyFriendState] =
    
      useState<THomelyFriendCreateUpdate>({
      
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
      
      {homelyFriendState.homely_friend && <>

      <label className='all-infos'>
        
        <h2>IDENTIFIER : {homelyFriendState.homely_friend?._id} </h2>
      
      </label>

      <label className='all-infos'>

        <img src={homelyFriendState.homely_friend?.imgUrl} alt='homely friend picture'/>
      
      </label>

      <label className='all-infos'>

        <h2>Name : {homelyFriendState.homely_friend?.name}</h2>
      
      </label>

      <label className='all-infos'>
        
        <h2>Type : {homelyFriendState.homely_friend?.type}</h2>

      </label>

      <div className='all-infos'>

      <div>Born On : {homelyFriendState.homely_friend?.birthDate}</div>

      </div>

      <div className='all-infos'>

        <div>Pedigree : {homelyFriendState.homely_friend.pedigree ? "Present" : "Not Present"}</div>

      </div>

    <div className='all-infos'>

      <div>Breed : {homelyFriendState.homely_friend?.breed}</div>

    </div>

    <div className='all-infos'>
    
    {VisualizeAge(checkYears (homelyFriendState.homely_friend.birthDate))}
    
    </div>
    
    <div className='all-infos'>

      <div>Description : {homelyFriendState.homely_friend?.description}</div>

    </div>

    <div className='all-infos'>

      <div>Created At : {homelyFriendState.homely_friend?.created_at}</div>

    </div>


    <div className='all-infos'>

        <div>Updated At : {homelyFriendState.homely_friend?.updated_at}</div>

    </div>

      <button className='Modify-Button'

        disabled={homelyFriendState.retrevingData} 
        
        onClick={ ()=> goTo (`/animal/${homelyFriendState.homely_friend?._id}/edit`)}>

        - MODIFY PET -
        </button>
      
  <HomelyFriendRemove homely_friend= {homelyFriendState.homely_friend}/>

      </>}
  
      </div>
  );
};





