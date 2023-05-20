import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IHomelyFriend } from "../../model/HomelyFriend";
import { URL } from '../../API_URL';



type THomelyFriendDelete = {

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

const [homelyFriendRemoveState, setHomelyFriendRemoveState] = useState<THomelyFriendDelete>({

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

window.confirm(`Friend Removed Successfully`);

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
  
<button className='Remove-Button'
disabled={homelyFriendRemoveState.removing} onClick={()=> {

setHomelyFriendRemoveState({

...homelyFriendRemoveState,

confirmRemove: true,

});

}}>REMOVE PET
</button>
</>}

{homelyFriendRemoveState.confirmRemove && <>
  
  <h3>Are you sure ?</h3>
  
  <button className='Confirm-Remove'
  onClick={() => HomelyFriendErase()}>YES</button>

<button className='Not-Confirm-Remove'
onClick={() => {

goTo(`/`);

setHomelyFriendRemoveState({

...homelyFriendRemoveState,

confirmRemove: false

});

window.confirm ('Friend Not Removed');

}}>NO</button>


  </>}

</div>
);}




