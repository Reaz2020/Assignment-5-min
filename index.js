



//-----------------
//donation handling for first card 
document.getElementById('donate-now-btn').addEventListener('click', function() {
  

  let newInitialSuggestedAmount =  parseFloat(document.getElementById('initial-suggestedAmount').innerText);
  let newInitialSuggestedAmountInsideCard =parseFloat(document.getElementById('initial-suggestedAmountInsideCard').innerText);


 const userAmount= document.getElementById('amount').value;
 
 parseFloat(userAmount)
  if(validateAmount(userAmount)){


    let idOfInitialSuggestedAmount =document.querySelector('#initial-suggestedAmount');
    let idOfInitialSuggestedAmountInsideCard =document.querySelector('#initial-suggestedAmountInsideCard');
   
    reduceFromInitialAmount(userAmount,newInitialSuggestedAmount,  idOfInitialSuggestedAmount)
    addAmountToCardAmount(userAmount,idOfInitialSuggestedAmountInsideCard , newInitialSuggestedAmountInsideCard )
    document.getElementById('valid-modal').classList.remove('hidden') 
    document.getElementById('donate-now-btn').setAttribute('href', '#valid-modal');
    creatingADivForHistoryPage(userAmount)
    return;
  }
  if(!validateAmount(userAmount))
    
     {
     alert('enter valid amount')
    document.getElementById('donate-now-btn').setAttribute('href', '#');
     
    return;
    
  }

 
})


//----------------

//donation handling for seconde card 
document.getElementById('donate-now-btnTwo').addEventListener('click', function() {
  

  let newInitialSuggestedAmount =  parseFloat(document.getElementById('initial-suggestedAmount').innerText);
  let newInitialSuggestedAmountInsideCard =parseFloat(document.getElementById('initial-suggestedAmountInsideCardTwo').innerText);


 const userAmount= document.getElementById('amount-two').value;
 
 parseFloat(userAmount)
  if(validateAmount(userAmount)){


    let idOfInitialSuggestedAmount =document.querySelector('#initial-suggestedAmount');
    let idOfInitialSuggestedAmountInsideCard =document.querySelector('#initial-suggestedAmountInsideCardTwo');
   
    reduceFromInitialAmount(userAmount,newInitialSuggestedAmount,  idOfInitialSuggestedAmount)
    addAmountToCardAmount(userAmount,idOfInitialSuggestedAmountInsideCard , newInitialSuggestedAmountInsideCard )
    document.getElementById('valid-modal').classList.remove('hidden') 
    document.getElementById('donate-now-btn').setAttribute('href', '#valid-modal');
    creatingADivForHistoryPage(userAmount)
  }
  else{
    alert('enter valid amount')
    document.getElementById('donate-now-btnTwo').setAttribute('href', '#');
    return;
    
  }
})


//----------------


//donation handling for third card 
document.getElementById('donate-now-btnThree').addEventListener('click', function() {
  

  let newInitialSuggestedAmount =  parseFloat(document.getElementById('initial-suggestedAmount').innerText);
  let newInitialSuggestedAmountInsideCard =parseFloat(document.getElementById('initial-suggestedAmountInsideCardThree').innerText);


 const userAmount= document.getElementById('amount-three').value;
 
 parseFloat(userAmount)
  if(validateAmount(userAmount)){


    let idOfInitialSuggestedAmount =document.querySelector('#initial-suggestedAmount');
    let idOfInitialSuggestedAmountInsideCard =document.querySelector('#initial-suggestedAmountInsideCardThree');
   
    reduceFromInitialAmount(userAmount,newInitialSuggestedAmount,  idOfInitialSuggestedAmount)
    addAmountToCardAmount(userAmount,idOfInitialSuggestedAmountInsideCard , newInitialSuggestedAmountInsideCard )
    document.getElementById('valid-modal').classList.remove('hidden') 
    document.getElementById('donate-now-btnThree').setAttribute('href', '#valid-modal');
    creatingADivForHistoryPage(userAmount)
  }
  else{
    alert('enter valid amount')
    document.getElementById('donate-now-btnThree').setAttribute('href', '#');
    return;
    
  }
})


//------------------



function reduceFromInitialAmount(amountToBeReduced,newInitialSuggestedAmount,idOfInitialSuggestedAmount) {

  let n=parseFloat(amountToBeReduced)

 
  let newSuggestedAmount = newInitialSuggestedAmount - n;

  idOfInitialSuggestedAmount.innerText = newSuggestedAmount;

}


//-----------------------------

function addAmountToCardAmount(amountToBeAdded,idOfInitialSuggestedAmountInsideCard , newInitialSuggestedAmountInsideCard ){

   let newAmountToBeAdded=parseFloat(amountToBeAdded)
   
 
  let previousValue = newInitialSuggestedAmountInsideCard

   let newValue= previousValue + newAmountToBeAdded;

  idOfInitialSuggestedAmountInsideCard.innerText=newValue;


}
 

//---------------------------------------------------

//----- helper common function for donation 
function validateAmount(paraAmount) {
  const regex = /^(0|[1-9]\d*)(\.\d+)?$/; // Regex for non-negative numbers including floats

  //  if the amount matches the regex
  if (!regex.test(paraAmount)) {  
      return false;
  }

  const parsedAmount = parseFloat(paraAmount);

  //  if it's a valid number and greater than zero
  if (parsedAmount > 0) {
      return true; // Valid positive number
  }

  return false; // Not a valid amount
}


function getInputFieldValue(){
  value = document.getElementById('amount').value;
  console.log(value);
  // return value;


}
// when i will press to close the modal this function will re add the hidden class, to modal to keep it hidden
function reAddingHiddenClass(){ 
  document.getElementById('valid-modal').classList.add('hidden') 
}
//------------------------------
//history and donation toggling 



document.getElementById('history-btn').addEventListener('click', function() {


  document.getElementById('history').classList.remove('hidden');
  document.getElementById('cards').classList.add('hidden');


  document.getElementById('history-btn').classList.remove('bg-white');
  document.getElementById('history-btn').classList.add('bg-lime-500');
  document.getElementById('donation-btn').classList.remove('bg-lime-500');

})

document.getElementById('donation-btn').addEventListener('click', function() {


  document.getElementById('cards').classList.remove('hidden');
  document.getElementById('history').classList.add('hidden');


  document.getElementById('history-btn').classList.remove('bg-lime-500');
  document.getElementById('donation-btn').classList.add('bg-lime-500');




})





function creatingADivForHistoryPage(ParaAmount){
  const date = new Date();
  let amount=ParaAmount;

  const div = document.createElement('div');
  div.className = 'div bg-white border border-gray-300 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer';

  const h1 = document.createElement('h1');
  h1.className = 'text-xl font-semibold';
  h1.textContent = 'Thanks for donating ' + amount;
  div.appendChild(h1);

  const p = document.createElement('p');
  p.className = 'text-x font-semibold';
  p.textContent = date;
  div.appendChild(p);


  const historySection = document.getElementById('history');
  historySection.appendChild(div);

}