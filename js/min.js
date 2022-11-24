function updateCaseInput(productId,price,isIncreasing){
    const caseInput=  document.getElementById(productId + '-number');
      let caseNumber=caseInput.value;

  if(isIncreasing){
    caseNumber=parseInt(caseNumber) + 1;
  }else if(caseNumber > 0){
    caseNumber=parseInt(caseNumber) - 1;
  }
  caseInput.value=caseNumber;

  const updateCase= document.getElementById(productId + '-total');
  updateCase.innerText=caseNumber *price;

  calculateTotal()
}
function updateProductInput(product){
    const phoneNumber=document.getElementById(product+'-number');
    const phoneQuantity=parseInt(phoneNumber.value);
    return phoneQuantity;
}
function calculateTotal(){
    const phoneAmount=updateProductInput('phone') * 1219;
    const caseAmount=updateProductInput('case') * 59;
    const subTotal=phoneAmount + caseAmount;
    const tax=subTotal / 10;
    const total=subTotal + tax

    // set in html
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-ammount').innerText=tax;
    document.getElementById('total').innerText=total
}





// phone number update and minus
document.getElementById('phone-plus').addEventListener('click',function(){
updateCaseInput('phone',1259,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
updateCaseInput('phone',1259,false);
})




// case number update and minus
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseInput('case',59, true);
  
})
document.getElementById('case-minus').addEventListener('click',function(){
  updateCaseInput('case',59,false);
  
})