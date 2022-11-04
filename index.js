
let btn=document.querySelector("button");

const calculateTip=(event)=>{
    event.preventDefault();
    let totalBill=document.getElementById("totalbill").value;
    console.log(totalBill)
    let tipPercent=document.getElementById("tippercent").value;
    let totalPepole=document.getElementById("totalpepole").value;
    let individualTip=document.getElementById("individualtip");
      individualTip.innerHTML="_";
    // console.log(totalBill,tipPercent,totalPepole);
    
     if(totalBill !==  "" &&  totalPepole !== "" && tipPercent !== "a" && totalBill>=0 &&totalPepole>=1){
        totalBill=+totalBill;
        tipPercent=+tipPercent;
        totalPepole=+totalPepole;
        
            let tip=(totalBill*tipPercent)/(100*totalPepole);
             document.querySelector("form").reset();
             individualTip.innerHTML=tip; 
    }
    else {
          alert("Enter All Values")
    } 

}
btn.addEventListener("click",calculateTip);


