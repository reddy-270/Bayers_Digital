"use strict"

// var s = document.getElementsByClassName('kyp-entry');

function check_code() {

    //we need to get the result from the server from the database
    const s = document.getElementById("kyp-entry").value;
    if(s.length<6) 
    {
        console.log("this is sai bharath");
        document.getElementById("kyp_decision").innerHTML = "*Please enter the valid Code" ;
        document.getElementById("kyp_decision").style.color = "red";
    }
    else
    {
        console.log("this is bharath");
        console.log(s);
        document.getElementById("kyp_decision").innerHTML = "";
    }
    // print(s);
    return true;
}

