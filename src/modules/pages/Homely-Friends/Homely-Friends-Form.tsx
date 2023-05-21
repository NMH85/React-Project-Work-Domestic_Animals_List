import { useForm } from "react-hook-form";
import {standardHomelyFriend} from "../../../utils/Utility.HomelyFriend"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { URL } from "../../../API_URL";
import { IHomelyFriend } from "../../../model/HomelyFriend";



type THomelyFriendCreateUpdate = {
  
  retrevingData: boolean;
  error: boolean;
  homely_friend: IHomelyFriend | null;
};


export const HomelyFriendForm = () => {

  const goTo = useNavigate ();

  const actualDay = dayjs().format('YYYY-MM-DD');

  const check = useParams ();

  const _id = check._id;

  const [homelyFriendState, setHomelyFriendState] = useState <THomelyFriendCreateUpdate>({

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

const notify = !data._id ? `You have successfully Registered your Friend`
: `Friend's Infos Updated`;

setHomelyFriendState({
...homelyFriendState,
retrevingData: false,
});

const id = ask.data._id;

window.confirm(notify);

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
const buttonLettering = homelyFriendState.homely_friend?._id ?  "- UPDATE PET PROFILE -" : "- REGISTER PET PROFILE -";

return (

<div className='Homely_Friend_Form'>

{!_id && <><h1>- REGISTER YOUR PET -</h1></>}

{_id && <><h1>- UPDATE YOUR PET'S INFOS -</h1></>}


<form>


<div className='row'>

<label htmlFor='name'>Insert Your Friend's Name:  </label>
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
  <label htmlFor="type" id="type"> Your Friend is a CAT or a DOG ? </label>
    
    <select {...register("type", { required: true })}>
      
      <option value="CAT">CAT</option>
      <option value="DOG">DOG</option>
      </select>
</div>
        
        
  {watchType && (
    <div className="row">
      
      <label htmlFor="breed" id="breed"> Select Your Friend's Breed: </label>
        <select
        {...register("breed", {
        required: { value: true, message: "Field required" },
})}>
              
              
  {watchType === "CAT" ? ( <>
    
    <option value="">Stray Cat</option>
    <option value="Cymrics">Cymrics</option>
    <option value="Siamese">Siamese</option>
    <option value="Burma's Sacred">Burma's Sacred</option>
    <option value="Persian">Persian</option>
    <option value="Ragdoll">Ragdoll</option>
    <option value="Abyssinian">Abyssinian</option>
    <option value="Norwegian">Norwegian</option>
    <option value="Maine Coon">Maine Coon</option>
    <option value="Sphynx">Sphynx</option>
    <option value="Scottish Fold">Scottish Fold</option>
  
  </>) : 
  
  (<>
    
    <option value="">Stray Dog</option>
    <option value="Australian Silky Terrier">Australian Silky Terrier</option>
    <option value="Chihuahua">Chihuahua</option>
    <option value="Pinscher">Pinscher</option>
    <option value="Pomeranian">Pomeranian</option>
    <option value="Pitbull">Pitbull</option>
    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
    <option value="German Shepherd">German Shepherd</option>
    <option value="Great Dane">Great Dane</option>
    <option value="Rough Collie">Rough Collie</option>
    <option value="Labrador Retriever">Labrador Retriever</option>
  
  </> )}
  
  </select>
  </div>)}


  <div className='row'>
  <label htmlFor='birthDate'>Select Your Friend's Birthdate:  </label>
  
  <input
    id='birthDate'
    type='date'
    max={actualDay}
    {...register('birthDate', {
    required: { value: true, message: 'Field Required' },
  
  })}
  />
  
  {errors.birthDate && errors.birthDate.message}
  </div>

  
  <div className='row'>
  <label htmlFor='imgUrl'>Insert Your Friend's Picture URL :  </label>
  
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
  <label htmlFor='description'>Describe Your Friend  </label>
  
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
  <label htmlFor='pedigree'>Does Your Friend have a Pedigree ? </label>
  
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
  
  
      <button className='Register-Button'
      

        disabled={!isValid}onClick={handleSubmit(onSubmit)}> {buttonLettering}
        
        </button>

        
          {_id && <>
            
            <button className='Back-Button'
            
            onClick={() => goTo(`/animal/${_id}`)}> - BACK -
            
            </button>
            
            </>}
          
          </>}

</div>

{homelyFriendState.error && "Error"}

</form>

</div>

);}




  
  
  
    





