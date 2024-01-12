// function validateForm() {
  
//     document.getElementById("username").innerHTML=document.getElementById("username").value;
    
//     document.getElementById("firstname").innerHTML=document.getElementById("firstname").value;

//     document.getElementById("lastname").innerHTML=document.getElementById("lastname").value;

//     document.getElementById("phnumber").innerHTML=document.getElementById("phnumber").value;

//     document.getElementById("email").innerHTML=document.getElementById("email").value;


//   }

function validateForm() {
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phnumber = document.getElementById("phnumber").value;
    var email = document.getElementById("email").value;

    // Create a new table row
    var newRow = document.createElement("tr");

    // Create and append cells with form details
    var usernameCell = document.createElement("td");
    usernameCell.textContent = username;
    newRow.appendChild(usernameCell);

    var firstnameCell = document.createElement("td");
    firstnameCell.textContent = firstname;
    newRow.appendChild(firstnameCell);

    var lastnameCell = document.createElement("td");
    lastnameCell.textContent = lastname;
    newRow.appendChild(lastnameCell);

    var phnumberCell = document.createElement("td");
    phnumberCell.textContent = phnumber;
    newRow.appendChild(phnumberCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    // Append the new row to the table body
    document.getElementById("formDetailsBody").appendChild(newRow);

    // Optionally, clear the form fields after adding to the table
    document.getElementById("myForm").reset();

    // Return false to prevent form submission (you can change this as needed)
    return false;
}

