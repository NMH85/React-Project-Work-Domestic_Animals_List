export const checkYears = ( birthdate:string ) => {
    
   
    const Birthyear = new Date( birthdate ).getFullYear();
   
    const actualYear = new Date().getFullYear();
   
    return actualYear - Birthyear;
}


export const VisualizeAge=( lifeTime:number )=>{


switch ( lifeTime )

{case 0: return `He is less than a Year old`;

case 1: return ` He is a Year old`;

default: return ` He is ${ lifeTime } Years old`;}
}
