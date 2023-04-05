//deposit btn
let depositBtn = document.querySelector("#depositBtn");
let depositMoney = document.querySelector("#depositinput");
let deposit = document.querySelector("#deposit");
let mainBalance = document.querySelector("#mainBalance");
let withdrawbtn=document.querySelector("#withdrawbtn");
let withdrawac=document.querySelector("#withdrawacc");
let withdraw =document.querySelector("#withdraw");


depositBtn.addEventListener( "click", ( )=>{
    let depMoney= depositMoney.value
   // console.log(depMoney)
   let depMoneyValue=depositMoney.value
   let balancevalue=mainBalance.innerText

   if(depMoney<100){
    alert("less then 100 is not allow")
   }
   else
   depositeAdd(depMoney,depMoneyValue)
   balanceUpdate(balancevalue,depMoney)
}) 

//deposit money add
let depositeAdd=(depMoney,depMoneyValue)=>{
    let moneydep=parseFloat(depMoney)+parseFloat(depMoneyValue)
    deposit.innerText=moneydep
    console.log(deposit)
}

let balanceUpdate=(balancevalue,depMoney)=>{
    let subMainBalance=parseFloat(balancevalue)+parseFloat(depMoney);
    mainBalance.innerText=subMainBalance
}


withdrawbtn.addEventListener( "click", ( )=>{
    let withMoney= parseFloat(withdraw.innerText);
   // console.log(depMoney)
   let withdrawMoney=withdraw.innerText
   let balancevalue=parseFloat(mainBalance.innerText);

   if(balancevalue==0){
    balancevalue.innerText="00";
   }
   else if(withMoney<-0||withMoney==0 || balancevalue<withMoney){
    alert("your account no money");
   }
   else
     withdrawMoney(withMoney,withdrawMoney);
     balanceUpdate2(balancevalue,withMoney)
}) 

let withdrawMoney=(withMoney,withdrawMoney)=>{
     let balanceUpdateTotal=parseFloat(withMoney)+parseFloat(withdrawMoney);
     withdraw.innerText=balanceUpdateTotal;     
}
let balanceUpdate2=(balancevalue,withMoney)=>{
    let balanceUpdateState=balancevalue-withMoney;
    mainBalance.innerText=balanceUpdateState;
}
