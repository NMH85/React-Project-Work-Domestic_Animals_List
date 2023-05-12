export const checkYears = ( birthdate:string ) :number => {
    
   
    const Birthyear = new Date( birthdate ).getFullYear();
   
    const actualYear = new Date().getFullYear();
   
    return actualYear - Birthyear;
}


export const VisualizeAge=( lifeTime:number ) :string =>{


switch ( lifeTime )

{case 0: return `This four-legged friend is less than a Year Old`;

case 1: return ` This four-legged friend is a Year Old`;

default: return ` This four-legged friend is ${ lifeTime } Years Old`;}
}
