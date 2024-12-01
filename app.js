// UI elements

let dayinput = document.getElementById('day'),
   monthinput = document.getElementById('month'),
   yearinput = document.getElementById('Year');
   btncal = document.querySelector('.btn'),
   currentyear = new Date().getFullYear(),
   Specificdate  = new Date('2024-02-17'),
   DayOfMonth  = Specificdate.getDate();

   let currentMonth = new Date().getMonth() +1;

// input feild validations.

dayinput.addEventListener('keyup', ()=>{
   if(isNaN(dayinput.value) || parseInt(dayinput.value)<=0){
      document.getElementById('validDay').innerHTML='Invalid Day!';
      return false;
   }else{
      document.getElementById('validDay').innerHTML = '';
   }
})
monthinput.addEventListener('keyup',() =>{
   if(isNaN(monthinput.value) || parseInt(monthinput.value)<1 || parseInt(monthinput.value)>12){
      document.getElementById('validmonth').innerHTML = 'Invalid Month';
      return false;
   }else{
      document.getElementById('validmonth').innerHTML = '';
   }
})
yearinput.addEventListener("keyup", () => {
   if (
     !(
       Number.isInteger(parseInt(yearinput.value, 10)) &&
       parseInt(yearinput.value, 10) >= 1000 &&
       parseInt(yearinput.value, 10) <= 2024
     )
   ) {
     document.getElementById("validyear").innerHTML =
       "must be between 1000-2024";
     return false;
   } else {
     document.getElementById("validyear").innerHTML = "";
   }
 });
 

// create function that calculate age;

function calculate(){
   let inputDay = parseInt(dayinput.value);
       inputmonth = parseInt(monthinput.value),
      inputyear = parseInt(yearinput.value);

   // check all fields are empty 
   if(isNaN(inputDay) || isNaN(inputmonth) || isNaN(inputyear)){
      document.getElementById('validday').innerHTML = 'field this fields';
      document.getElementById('validmonth').innerHTML = 'field this fields';
      document.getElementById('validyear').innerHTML = 'field this fields';
      return false;
   }
   // calucalte age
   let ageYears = currentyear - inputyear,
      ageMonths = currentMonth - inputmonth,
      ageDays= DayOfMonth - inputDay;

      if(currentMonth < inputmonth){
         ageMonths+=12;
         ageYears-=1;
      }
      if(ageDays < 0){
         ageMonths--;
         ageDays+= new Date(currentyear, currentMonth - 1, 0).getDate();
      }else{
         ageDays = ageDays;
      }

      if(ageMonths < 0){
         ageYears--;
         ageMonths+=12;
      }
      if(ageYears<0){
         alert('this birth is not exist');
         return false;
      }
      document.getElementById('yearresult').innerHTML = ageYears;
      document.getElementById('monthresult').innerHTML = ageMonths;
      document.getElementById('dayresult').innerHTML = ageDays;
}

//  add event listener to button;

btncal.addEventListener('click', calculate);