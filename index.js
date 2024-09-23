




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
  }
  else{
    alert('enter valid amount')
    return;
    
  }
})
function reAddingHiddenClass(){
  document.getElementById('valid-modal').classList.add('hidden') 
}

//----------------
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

//----- helper function
function validateAmount(paraAmount) {
  const regex = /^(0|[1-9]\d*)(\.\d+)?$/; // Regex for non-negative numbers including floats

  // Check if the amount matches the regex
  if (!regex.test(paraAmount)) {  
      return false;
  }

  // Check if it's a valid number and greater than zero
  if (paraAmount > 0) {
      return true; // Valid positive number
  }

  return false; // Not a valid amount
}


function getInputFieldValue(){
  value = document.getElementById('amount').value;
  console.log(value);
  // return value;


}

