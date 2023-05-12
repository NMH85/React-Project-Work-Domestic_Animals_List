import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IHomelyFriend } from "../../../model/HomelyFriend";
import { URL } from '../../../API_URL';



type THomelyFriendStateIII = {

  confirmRemove: boolean;
  error: boolean;
  removing: boolean;
}

type Props = {

homely_friend:IHomelyFriend

}

export const HomelyFriendRemove = (props: Props) => {


const { homely_friend } = props;

const goTo = useNavigate();

const [homelyFriendRemoveState, setHomelyFriendRemoveState] = useState<THomelyFriendStateIII>({

confirmRemove: false,
removing: false,
error: false,

});


const update = () => window.location.reload();

const HomelyFriendErase = async () => {

setHomelyFriendRemoveState({

...homelyFriendRemoveState,

removing: true,

});

try {

await axios.delete(`${URL}/animal/${homely_friend._id}`);

setHomelyFriendRemoveState({
...homelyFriendRemoveState,
removing: false,
});

window.confirm(`Friend removed successfully`);

goTo(`/`);

update();

} catch (er) {

  setHomelyFriendRemoveState({

...homelyFriendRemoveState,
removing: false,
error: true,
});

}}

return (

<div>
{homelyFriendRemoveState.removing && 'Cancel...'}
{!homelyFriendRemoveState.confirmRemove && <>

<button disabled={homelyFriendRemoveState.removing} onClick={()=> {

setHomelyFriendRemoveState({

...homelyFriendRemoveState,
confirmRemove: true,

});

}}>REMOVE FRIEND</button>

</>}

{homelyFriendRemoveState.confirmRemove && <>
  <p>Are you sure ?</p>

  <button onClick={() => HomelyFriendErase()}>YES</button>
<button onClick={() => {

goTo(`/`);

setHomelyFriendRemoveState({

...homelyFriendRemoveState,
confirmRemove: false

});

window.confirm ('Friend not removed');

}}>NO</button>


  </>}

</div>
);}




