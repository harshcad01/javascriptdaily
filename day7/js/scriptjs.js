function calculation(opt){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    switch(opt){
        case "+":
            document.getElementById('result').innerHTML =a+b;
            break;
        case "-":
            document.getElementById('result').innerHTML= a-b;
            break;
        case "*":
            document.getElementById('result').innerHTML= a*b;
            break;
            case "/":
                document.getElementById('result').innerHTML= a/b;
                break;
            case "%":
                document.getElementById('result').innerHTML= a%b;
                break;
        default:
            alert("Invalid Operation");
    }
    document.getElementById("result").innerHTML = R ;
}

grades1(R);
