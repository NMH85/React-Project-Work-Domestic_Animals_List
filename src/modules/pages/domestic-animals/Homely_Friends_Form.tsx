import { useForm } from "react-hook-form";
import {standardHomelyFriend} from "../../../utils/Utility.HomelyFriend"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { URL } from "../../../API_URL";
import { IHomelyFriend } from "../../../model/HomelyFriend";



type THomelyFriendStateII = {
  
  retrevingData: boolean;
  error: boolean;
  homely_friend: IHomelyFriend | null;
};


export const Homely_Friend_Form = () => {

  const goTo = useNavigate ();

  const actualDay = dayjs().format('YYYY-MM-DD');

  const check = useParams ();

  const _id = check._id;

  const [homelyFriendState, setHomelyFriendState] = useState <THomelyFriendStateII>({

    retrevingData: false,
    error: false,
    homely_friend: null,
});


const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid, errors },} = useForm
    ({ mode: "onChange", defaultValues: standardHomelyFriend });
  
  
  const fetchHomelyFriend = async () => {

    setHomelyFriendState({

      ...homelyFriendState,
      retrevingData: true,
});


try {

const ask  = await axios.get (`${URL}/animal/${_id}`);
const data : IHomelyFriend = ask.data;

setHomelyFriendState({
...homelyFriendState,
homely_friend: data,
retrevingData: false,
});

reset (data);

} catch (er) {

setHomelyFriendState({
...homelyFriendState,
retrevingData: false,
error: true,
});

}}
  
  const onSubmit = async (data: IHomelyFriend) => {

setHomelyFriendState({
...homelyFriendState,
retrevingData: true,
});


try {


const ask = !data._id ? await axios.post(`${URL}/animal`, data) 
: await axios.put(`${URL}/animal/${_id}`, data);

const notify = !data._id ? `You have successfully registered you friend`
: `Friend's Infos updated`;

setHomelyFriendState({
...homelyFriendState,
retrevingData: false,
});

const id = ask.data._id;
confirm(notify);
goTo (`/animal/${id}`);

} catch (er) {

setHomelyFriendState({
...homelyFriendState,
retrevingData: false,
error: true,
});

}}

useEffect(() => {

  if (!_id) {

    reset (standardHomelyFriend);
  }
}, [_id]);


useEffect(() => {

fetchHomelyFriend();
}, []);


const watchImage = watch ('imgUrl');
const watchType = watch("type");

return (

<div className='Homely_Friend_Form'>

{_id && <><h1>Update your Friend</h1></>}

{!_id && <><h1>Register your Friend</h1></>}

<form>


<div className='row'>

<label htmlFor='name'>Insert your friend's Name:  </label>
  <input
      id='name'
      {...register('name', {
      required: { value: true, message: 'Field Required' },
})}
  placeholder='Name'
/>
{errors.name && errors.name.message}
</div>

<div className="row">
  <label htmlFor="type" id="type"> Your Friend is a CAT or DOG ? </label>
    <select {...register("type", { required: true })}>
      <option value="CAT">Cat</option>
      <option value="DOG">Dog</option>
      </select>
</div>
        
        
  {watchType && (
    <div className="row">
      <label htmlFor="breed" id="breed"> Your Friend Breed: </label>
        <select
        {...register("breed", {
        required: { value: true, message: "Field required" },
})}>
              
              
  {watchType === "CAT" ? ( <>
    <option value="">None</option>
    <option value="Persian">Persian</option>
    <option value="Abyssinian">Abyssinian</option>
  </>) : 
  
  (<>
    <option value="">None</option>
    <option value="Pinscher">Pinscher</option>
    <option value="Pitbull">Pitbull</option>
  </> )}
  </select>
  </div>)}


  <div className='row'>
  <label htmlFor='birthdate'>Insert your friend's birthdate:  </label>
  <input
    id='birthdate'
    type='date'
    max={actualDay}
    {...register('birthdate', {
    required: { value: true, message: 'Field Required' },
  })}
  />
  {errors.birthdate && errors.birthdate.message}
  </div>

  
  <div className='row'>
  <label htmlFor='imgUrl'>Insert your friend picture:  </label>
  <input
    id='imgUrl'
    {...register('imgUrl', {
    required: { value: true, message: 'Field Required' },
  })}
    placeholder='Image'
  />
  {errors.imgUrl && errors.imgUrl.message}
  </div>

                
  <div className='row'>
  <label htmlFor='description'>Describe your friend  </label>
  <input
    id='description'
    {...register('description', {
    required: { value: true, message: 'Field Required' },
    minLength: { value: 9, message: 'Min 10 char allowed'}
  })}
  placeholder='Description'
  />
  {errors.description && errors.description.message}
  </div>

                
  <div className='row'>
  <label htmlFor='pedigree'>Your friend has a pedigree ? </label>
  <input
    type='checkbox'
    id='pedigree'
    {...register('pedigree', {
    required: { value: false, message: 'Field not Required' }
  })}
  />
  </div>

                
  <div className='row'>
    {watchImage && (
    <img className='preview-image' src={watchImage} />
  )}
  </div>


  <div className='row'>

{!homelyFriendState.retrevingData && <>

<div className='row-RegButton'>


<button disabled={!isValid}onClick={handleSubmit(onSubmit)}> Register </button>

{_id &&<>

<button onClick={() => goTo(`/animal/${_id}`)}> Go Back </button>

</>}

</div>

</>}

</div>

{homelyFriendState.error && "Error"}

</form>

</div>

);}




  
  
  
    





