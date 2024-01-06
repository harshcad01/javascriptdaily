console.log("Day 3 javaScript");
console.log("condition statement");

m= 100;

var mark = (m>=35 && 60>m) ? "Grade D " : (m>=60 && 80>m) ? "Grade b" : (m>=80 && 90>m) ? " Grade A " : (m>=90 && 100>=m) ? "Distinction" : "Fail";
console.log(mark);

function gradem(m){
    var mark = (m>=35 && 60>m) ? "Grade D " : (m>=60 && 80>m) ? "Grade b" : (m>=80 && 90>m) ? " Grade A " : (m>=90 && 100>=m) ? "Distinction" : "Fail";
console.log(mark);
}
gradem(12);

function gradem1(m,name){
    var mark = (m>=35 && 60>m) ? "Grade D " : (m>=60 && 80>m) ? "Grade b" : (m>=80 && 90>m) ? " Grade A " : (m>=90 && 100>=m) ? "Distinction" : "Fail";
console.log(name," : ",mark);
}
gradem1(89,"harsh");


var mk=(m,name)=>{
    var mark = (m>=35 && 60>m) ? "Grade D " : (m>=60 && 80>m) ? "Grade b" : (m>=80 && 90>m) ? " Grade A " : (m>=90 && 100>=m) ? "Distinction" : "Fail";
    console.log(name," : ",mark);
}
console.log(mk(79,"harsh"));