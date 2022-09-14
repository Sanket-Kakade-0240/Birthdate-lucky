var dateb= document.querySelector("#date-of-birth");
var lucky= document.querySelector("#lucky-number");
var btnCheck= document.querySelector("#btn-Check");
var out = document.querySelector("#output");

function outStatement(sumOfDL,lucky){
    if(sumOfDL%lucky===0){
        out.innerText = "Your birthdate is lucky!!! ✌";
    }else{
        out.innerText = "Your birthdate is unlucky 😞";
    }
}

function checkBtn() {
    var dob = dateb.value;
    var sumOfDL = dobPlusLucky(dob);
    outStatement(sumOfDL,lucky.value);
}


function dobPlusLucky(dob){
    dob = dob.replaceAll("-","");
    let sumOfDL=0;
    for(let i=0; i<dob.length ; i++){
        sumOfDL = sumOfDL + Number(dob.charAt(i));
    }
    return sumOfDL;
}

btnCheck.addEventListener("click", checkBtn); 