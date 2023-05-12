export const checkYears = ( birthdate:string ) :number => {
    
   
    const Birthyear = new Date( birthdate ).getFullYear();
   
    const actualYear = new Date().getFullYear();
   
    return actualYear - Birthyear;
}


export const VisualizeAge=( lifeTime:number ) :string =>{


switch ( lifeTime )

{case 0: return `He is less than a Year old`;

case 1: return ` He is a Year old`;

default: return ` He is ${ lifeTime } Years old`;}
}
