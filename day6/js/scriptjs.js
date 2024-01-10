function calculate(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var R;
    var opt = "*"
    switch(opt){
        case "+":
            R =a+b;
            break;
        case "-":
            R= a-b;
            break;
        case "*":
            R= a*b;
            break;
            case "/":
            R= a/b;
                break;
            case "%":
            R= a%b;
                break;
        default:
            alert("Invalid Operation");
    }

    document.getElementById("result").innerHTML = R ;

}

grades1(R);