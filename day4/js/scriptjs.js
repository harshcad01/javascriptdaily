var grade=(m,k)=>{
    var mark = (35<=m && m<60) ? "grade C" :
        (60<=m && m<80) ? "Grade B" :
        (80<=m && m<90) ? "Grade A" :
        (90<=m && m<=100) ? "Distinction" :
        "Fail";
console.log(k,mark);
}
grade(89,"harsh");



function grade1(){
    console.log("welcome");
    console.log("just trying");
}
grade1()


var grade2=(a,b)=>{
    return a+b;
}
console.log(grade2(8,9));


var grade3=grade2(1,2);
console.log(grade3);


var grade4=(a,b)=> a+b;
console.log(grade4("your added sum is .."+9,9));


var grade2=()=> grade1();
console.log(grade2);


function grades(m){
    if(35>m && m!=null){
        console.log("Fail")
    }    
    else if(35<=m && m<=100){
        console.log("pass");
    }else if(m>100){
        console.log("Your exeding the limites")
    }else{
        console.log("Enter the mark");
    }
}
grades(100);



function grades1(m){
    var a= Number(prompt("Enter the first num"));
    var b= Number(prompt("Enter the second num"));
    switch(m){
        case "+":
            var c =a+b;
            console.log("added value is .."+c);
            break;
        case "-":
            var c= a-b;
            console.log("sutracted value is .."+c);
            break;
        case "*":
            var c = a*b;
            console.log("Multiplied value is .."+c);
            break;
            case "/":
                var c = a/b;
                console.log("divided value is .."+c);
                break;
            case "%":
                var c = a%b;
                console.log("Reminder value is .."+c);
                break;
        default:
            alert("case not in list");
    }

}

grades1(prompt("operation add , sub, mul"));