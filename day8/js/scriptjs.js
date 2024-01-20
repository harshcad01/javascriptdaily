function loop(){
    var a = parseInt(document.getElementById("txvalue").value);
    console.log(a)
    console.log(typeof a)



    while(a<20){
        console.log("only while loop "+ a);
        a++;
    }

    do{
        console.log("do while loop "+ a);
        a++;
    }
    while(a<25)


    for(var b=a ; b<50 ; b++){
        console.log("for loop " + b);
    }
}