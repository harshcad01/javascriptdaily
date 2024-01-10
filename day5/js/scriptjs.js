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