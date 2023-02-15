export type TdefaultDomesticAnimal ={
    _id?:string,
    name: string,
    type: "CAT" | "DOG" | null,
    breed: string,
    birthDate: string,
    imgUrl: string,
    description: string,
    pedigree: boolean ,
  
  
  
  
  }
  
  export const defaultDomesticAnimal: TdefaultDomesticAnimal = {
    
    name: "",
    type: null,
    breed: "",
    birthDate: "",
    imgUrl: "",
    description: "",
    pedigree: false,
  };