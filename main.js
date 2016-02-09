function validateForm() {
    var s_up_username = document.forms["sign-up_form"]["sign-up_username"].value;
    var s_up_password = document.forms["sign-up_form"]["sign-up_password"].value;
    var s_up_nickname = document.forms["sign-up_form"]["sign-up_user-nickname"].value;
    var succ_block = document.getElementById("registeration-success-message");
    var msg1 = document.getElementById("error3");
    if (s_up_username == null || s_up_username.length == 0 || s_up_username.length > 10) {
        /*alert("Name must be filled out");*/
        msg1.style.display = "block";
        return false;
    }
    if (s_up_password == null || s_up_password.length == 0 || s_up_password.length > 8)
    {
    	msg1.style.display = "block";
        return false;
    }
    if (s_up_nickname == null || s_up_nickname.length == 0 || s_up_nickname.length > 20)
    {
    	msg1.style.display = "block";
        return false;
    }
    succ_block.style.display = "block";
  	return false;



}

var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8080/MusicityWebApp/MusicityServlet";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("POST", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}