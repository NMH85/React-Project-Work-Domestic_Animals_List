import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IHomelyFriend } from "../../../model/HomelyFriend";
import { checkYears, VisualizeAge } from "../../../utils/Utility-Functions";
import { URL } from '../../../API_URL';



type THomelyFriendStateII = {
  
  retrevingData: boolean;
  error: boolean;
  homely_friends: IHomelyFriend | null;
};

export const Homely_Friend_Infos = () => {
  
  const params = useParams();
  const location = useLocation();

  const _id = params._id;

  const homely_friends: IHomelyFriend = location.state;

  
  const [homelyFriendState, setHomelyFriendState] =
    
      useState<THomelyFriendStateII>({
      
      homely_friends: null,
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

      setHomelyFriendState ({
        ...homelyFriendState,
        
        retrevingData: false,
        homely_friends: ask.data,
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
    
    !homely_friends && fetchHomelyFriend();
  
  }, []);

  
  
  return (
    
    <div className="homely_friends_infos">
      
      {homelyFriendState.retrevingData && "Retrieving Data"}
      
      {homelyFriendState.error && "Error Retrieving Data "}
      
      {homelyFriendState.homely_friends &&
      
      ` ${VisualizeAge (checkYears (homelyFriendState.homely_friends.birthdate))}`}
    
    </div>
  );
};
