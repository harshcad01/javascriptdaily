function loop(){
  var names=["Karthik", "Arav", "Aarif", "Dinesh", "Harsh"];

  console.log(names);

  console.table(names);

  for (var a=0; a<names.length; a++){
   console.log(names[a]);
  }

  var res=names.forEach(function(n1){
   console.log(n1);
  })


  console.log("arrow function output");
  var res=names.forEach(n2=>console.log(n2));
  

  var nlist = ["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheerk"];

  var def1='r';
console.clear();

var res = nlist.filter(name1=>name1.startsWith("a") || 
name1.endsWith("h") || name1.startsWith(def1));
console.log(res);

var listnum = [1,2,3,4,5];
var res = listnum.map(number=>number*2);
console.log(res);


var res = listnum.reduce((sum,number)=>sum+=1);
console.log(res);

console.log(Math.PI);

console.log(Math.E);

var s=7.7
console.log(Math.round(s));
console.log(Math.floor(s));
console.log(Math.ceil(s));
console.log(Math.sqrt(s));
console.log(Math.pow(s,2));
console.log(Math.floor(Math.random()*10+100));
console.log(Math.abs(-7.7));
console.log(Math.floor(-7.7));
console.log(Math.min(20,21,89,66,10));
console.log(Math.max(20,21,89,66,10));

}
loop();