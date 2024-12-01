// UI element 

let height = document.getElementById('Height'),
   weight = document.getElementById('Weight'),
   calbtn = document.getElementById('calbtn'),
   result = document.getElementById('result');

calbtn.addEventListener('click', ()=>{
  if(height.value !== '' || weight.value !== ''){
    if(calbtn.innerHTML === 'Calculate'){
      // convert height into meters

     height = parseInt(height.value) / 100;
    let bmi = parseInt(weight.value) / (height * height);
    let message = '';
    // conditions..
    if(bmi<=18.5){
      message = 'Underwight'
    }else if(bmi >18.5 && bmi<=24.5){
      message = 'Normal';
    }else if(bmi >24.5 && bmi <=30){
      message = 'Overweight'
    }else{
      message = 'Obese';
    }
    result.innerHTML = message + ':'+bmi.toFixed(2);
    calbtn.innerHTML = 'Reset'
    }else if(calbtn.innerHTML === "Reset"){
      height.value = '';
      weight.value = '';
      result.innerHTML = '';
      location.reload();
    }
  }else{
    alert('Please fill the fields');

  }
})