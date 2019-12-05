
let num = document.getElementsByClassName("number");
let operator = document.getElementsByClassName("operator");
let equal = document.getElementById("output");
let subOutput = document.getElementById("sub-output");
let hasilDOM = document.getElementById("btn-equal");

let num1 = 0;
let num2 = undefined;
let operatorMath = '';
let hasil = 1;
let kumpulString = "";
let hasilTampil = false;
let checkerFirst = false;
let operatorCheck = false;
let hasilBollean = false;
let convertString = '';

hasilDOM.addEventListener('mousedown',function(){
    if(num2 !== undefined){
        num1 = jumlah(num1,operatorMath,num2);
        equal.innerHTML = num1;
        num2 = undefined;
        operatorMath = undefined;
        operatorCheck = false;
        kumpulString = "";
        subOutput.innerHTML = "";
        checkerFirst = false;
        hasilBollean = true;
    }
 hasilDOM.style.backgroundColor = '#797979';
 })

 hasilDOM.addEventListener('mouseup',function(){
 hasilDOM.style.backgroundColor = '';
 })

 hasilDOM.addEventListener('mouseleave',function(){
 hasilDOM.style.backgroundColor = '';
 })

 for(let i = 0;i<=num.length - 1;i++){
 
    num[i].addEventListener('mousedown',function(){
     num[i].style.backgroundColor = 'rgb(202, 202, 202)';
     if(checkerFirst == false && equal.innerHTML == '0'){
        equal.innerHTML = num[i].innerHTML;
        num1 = parseInt(equal.innerHTML);
        checkerFirst = true; 
     }else if(hasilBollean == true){
        equal.innerHTML = num[i].innerHTML;
        num1 = parseInt(equal.innerHTML);
        checkerFirst = true; 
        hasilBollean = false;
     }else if (operatorCheck == false){
        equal.innerHTML = equal.innerHTML + num[i].innerHTML;
        num1 = parseInt(equal.innerHTML);
     }else if(operatorCheck == true){
        equal.innerHTML = equal.innerHTML + num[i].innerHTML;
        kumpulString = kumpulString + num[i].innerHTML;
        num2 = parseInt(kumpulString);
     }
    })
    
    num[i].addEventListener('mouseup',function(){
     num[i].style.backgroundColor = '';
    })

    num[i].addEventListener('mouseleave',function(){
     num[i].style.backgroundColor = '';
    })
 }   

 for(let i = 0;i<=operator.length - 1;i++){
 operator[i].addEventListener('mousedown',function(){
 operator[i].style.backgroundColor = '#9986A6';

 if(operator[i].innerHTML == "Clr"){
     num1 = 0;
     equal.innerHTML = "0";
     subOutput.innerHTML = "";
     num1 = 0;
     num2 = undefined;
     operatorMath = '';
     hasil = 1;
     kumpulString = "";
     hasilTampil = false;
     checkerFirst = false;
     operatorCheck = false;
     hasilBollean = false;
 }else if(operator[i].innerHTML == "Del"){
   
    if (operatorMath == '' && subOutput.innerHTML != ''){
        subOutput.innerHTML = "";
        num1 = 0;
        equal.innerHTML = 0;
        hasilBollean = false;
    }else if(num2 != undefined){
        convertString = String(num2);
        convertString = convertString.substring(0,convertString.length - 1);
        num2 = parseInt(convertString);
        equal.innerHTML = equal.innerHTML.substring(0,equal.innerHTML.length - 1);
        kumpulString = String(num2);
        if(String(num2) == 'NaN'){num2 = undefined;kumpulString = ""};
    }else if (num2 == undefined && operatorMath != ''){
        equal.innerHTML = equal.innerHTML.substring(0,equal.innerHTML.length - 3);
        operatorMath = '';
        operatorCheck = false;  
    }else if (operatorMath == '' || operatorMath == undefined && hasilBollean == false){
        convertString = String(num1);
        convertString = convertString.substring(0,convertString.length - 1);
        num1 = parseInt(convertString);
        equal.innerHTML = equal.innerHTML.substring(0,equal.innerHTML.length - 1);
        if(String(num1) == 'NaN'){num1 = 0;equal.innerHTML = "0";hasilBollean = true;};
    }
    
 }else{

 if(operatorCheck === false){
     equal.innerHTML = equal.innerHTML + " " + operator[i].innerHTML + " ";
     operatorMath = operator[i].innerHTML;
     operatorCheck = true;
     hasilBollean = false;
     
 }else if (operatorCheck = true && num2 !== undefined){

    if (hasil == 1){
        subOutput.innerHTML = subOutput.innerHTML + equal.innerHTML;
    }else{
        subOutput.innerHTML = subOutput.innerHTML + " " + operatorMath + ' ' + num2;
    }

    hasil = jumlah(num1,operatorMath,num2);
    equal.innerHTML = hasil + " " + operator[i].innerHTML + " ";
    num1 = hasil;   
    operatorMath = operator[i].innerHTML;
    num2 = undefined;
    kumpulString = "";
    
 }
 operatorCheck = true;
 }})

 operator[i].addEventListener('mouseup',function(){
 operator[i].style.backgroundColor = '';
})

operator[i].addEventListener('mouseleave',function(){
    operator[i].style.backgroundColor = '';
})
}

//Function

function jumlah(int,operator,int1){
    switch(operator){
        case "+":
            return int + int1;
        case "-":
            return int - int1;
        case "X":
            return int * int1;
    }
}