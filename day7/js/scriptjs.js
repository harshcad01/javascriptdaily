 function register(){

    var usname = document.getElementById("txusername").value;
    document.getElementById("username").innerHTML= usname;

    var fname = document.getElementById("txfirstname").value;
    document.getElementById("firstname").innerHTML=fname;

    var lname = document.getElementById("txlastname").value;
    document.getElementById("lastname").innerHTML=lname;

    var phnum = document.getElementById("txphnumber").value;
    document.getElementById("phnumber").innerHTML=phnum;

    var email = document.getElementById("txemail").value;
    document.getElementById("email").innerHTML=email;
  }

