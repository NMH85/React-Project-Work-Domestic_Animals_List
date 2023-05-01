import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IHomelyFriend } from "../../../model/HomelyFriend";
import { URL } from '../../../API_URL';
import { checkYears, VisualizeAge } from "../../../utils/Utility-Functions";


type THomelyFriendStateIII = {

  confirmRemove: boolean;
  error: boolean;
  removing: boolean;
}

type Props = {

homely_friend:IHomelyFriend

}

export const Homely_Friend_Remove = (props: Props) => {


const { homely_friend } = props;

const goTo = useNavigate();

const [homelyFriendRemoveState, setHomelyFriendRemoveState] = useState<THomelyFriendStateIII>({

confirmRemove: false,
removing: false,
error: false,

});


const update = () => window.location.reload();

const Homely_Friend_Remove = async () => {

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

confirm(`Friend removed successfully`);

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

}}>Remove Friend</button>

</>}

{homelyFriendRemoveState.confirmRemove && <>
  <p>Are you sure ?</p>

  <button onClick={() => Homely_Friend_Remove()}>YES</button>
<button onClick={() => {

goTo(`/`);

setHomelyFriendRemoveState({

...homelyFriendRemoveState,
confirmRemove: false

});

confirm ('Friend not removed');

}}>NO</button>


  </>}

</div>
);}



