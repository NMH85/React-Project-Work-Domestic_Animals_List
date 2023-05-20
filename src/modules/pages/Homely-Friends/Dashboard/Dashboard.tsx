import axios from "axios";
import { useState, useEffect } from "react";
import { URL } from '../../../../API_URL';
import { IHomelyFriend } from "../../../../model/HomelyFriend";
import { HomelyFriendSorting } from '../../../components/Homely-Friends-Sort';




type THomelyFriendRead = {

    retrevingData: boolean;
    error: boolean;
    homely_friends: IHomelyFriend[] | null;
};

export const Dashboard = () => {

const [homelyFriendState, setHomelyFriendState] = useState<THomelyFriendRead>({

    retrevingData: false,
    error: false,
    homely_friends: null,
});

const fetchHomelyFriend = async () => {

    setHomelyFriendState ({

        ...homelyFriendState,

        retrevingData: true,

});



try {

const ask = await axios.get(`${URL}/animal`);
const data: IHomelyFriend[] = ask.data;

setHomelyFriendState({...homelyFriendState, homely_friends: data, retrevingData: false});

} catch (er){
setHomelyFriendState({
...homelyFriendState,
retrevingData: false,
error: true,
});

}}

useEffect(() => {

    fetchHomelyFriend();
},[]);

return (

<div className= 'homely_friends'> 
    <h1 className= 'homely_friends title'> - PET CATALOG -</h1>
        <div className= 'homely_friends-Dash-Sort'>

    {homelyFriendState.retrevingData && 'Retrieving Data'}
    {homelyFriendState.error && 'Error'}
    {homelyFriendState.homely_friends?.length === 0 && 'No Homely Friends found'}
    {homelyFriendState.homely_friends?.map(homely_friend => (

        <HomelyFriendSorting key= {homely_friend._id} homely_friend={homely_friend}/>
    ))}

        </div>

</div>
)}