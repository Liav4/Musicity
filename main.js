
function countWord(str) { 
  return str.split(" ").length;
}

function validateSignUpForm(s_up_username, s_up_password, s_up_nickname, s_up_url, s_up_descr) {
    var succ_block = document.getElementById("registeration-success-message");
    var username_l_msg = document.getElementById("s_username_l_error");
    var password_l_msg = document.getElementById("s_password_l_error");
    var nickname_l_msg = document.getElementById("s_nickname_l_error");
    var url_l_msg = document.getElementById("s_url_l_error");
    var descr_l_msg = document.getElementById("s_descr_l_error");
    var succ_flag = true;
    var flag_username_l = false;
    var flag_password_l = false;
    var flag_nickname_l = false;
    var flag_url_l = false;
    var flag_descr_l = false;

    succ_flag = true
    if (s_up_username == null || s_up_username.length == 0 || s_up_username.length > 10) {
        /*alert("Name must be filled out");*/
        flag_username_l = true;
        succ_flag = false;
    }
    if (s_up_password == null || s_up_password.length == 0 || s_up_password.length > 8)
    {
    	flag_password_l = true;
        succ_flag = false;
    }
    if (s_up_nickname == null || s_up_nickname.length == 0 || s_up_nickname.length > 20)
    {
    	flag_nickname_l = true;
        succ_flag = false;
    }
    if ( s_up_url.length > 400)
    {
    	url_l_msg.style.display = "inline-block";
    	flag_url_l = true;
        succ_flag = false;
    }

    if(countWord(s_up_descr) > 50)
    {
    	descr_l_msg.style.display = "inline-block";
    	flag_descr_l = true;
        succ_flag = false;
    }

    if(flag_username_l == true)
    {
    	username_l_msg.style.display = "inline-block";
    }
    else
    {
    	username_l_msg.style.display = "none";
    }

    if(flag_password_l == true)
    {
    	password_l_msg.style.display = "inline-block";
    }
    else
    {
    	password_l_msg.style.display = "none";
    }

    if(flag_nickname_l == true)
    {
    	nickname_l_msg.style.display = "inline-block";
    }
    else
    {
    	nickname_l_msg.style.display = "none";
    }


    if(flag_url_l == true)
    {
    	url_l_msg.style.display = "inline-block";
    }
    else
    {
    	url_l_msg.style.display = "none";
    }


    if(flag_descr_l == true)
    {
    	descr_l_msg.style.display = "inline-block";
    }
    else
    {
    	descr_l_msg.style.display = "none";
    }

    if(succ_flag == true)
    	succ_block.style.display = "block";
  	return succ_flag;

}




function updateProfilePic(val) {
	var pp = document.getElementById("profilePic");
	pp.style.border = "solid red";
	pp.style.content = "url('" + val + "')";

}


function handleSignUpForm () {
	
	var s_up_username = document.forms["sign-up_form"]["sign-up_username"].value;
    var s_up_password = document.forms["sign-up_form"]["sign-up_password"].value;
    var s_up_nickname = document.forms["sign-up_form"]["sign-up_user-nickname"].value;
    var s_up_url = document.forms["sign-up_form"]["sign-up_user-photo-url"].value;
    var s_up_descr = document.forms["sign-up_form"]["sign-up_short-description"].value; 

	var isOK = validateSignUpForm(s_up_username, s_up_password, s_up_nickname, s_up_url, s_up_descr);

    return false;
	if (isOK)
		sendSignUpForm(s_up_username, s_up_password, s_up_nickname, s_up_url, s_up_descr);

}

function sendSignUpForm(s_up_username, s_up_password, s_up_nickname, s_up_url, s_up_descr) {
    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/MusicityWebApp/MusicityServlet";
    var requestType = 2;

    xmlhttp.onreadystatechange = function() {
    	
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            	var responseText = xmlhttp.responseText;

            	/*if (responseText == "1")
            		// print existing user error

            	else 
            		// transfer page to the main page with
            		// the username as a parameter
                    */

            }

    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var sign_up_query = {
        "username":s_up_username,
        "password":s_up_password,
        "nickname":s_up_nickname,
        "imageURL":s_up_url,
        "shortDescription":s_up_descr
        };

    alert(sign_up_query.username);
    xmlhttp.send("hidden-input=" + requestType + "&sign-up_username=" + username.value + "&sign-up_password=" +
        password.value + "&sign-up_user-nickname=" + userNickname.value + "&sign-up_user-photo-url=" + imageURL.value +
        "&sign-up_short-description=" + shortDescription.value);
        return false;

}

