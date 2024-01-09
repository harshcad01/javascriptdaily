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
    }else{
        console.log("Enter the mark");
    }
}
grades()