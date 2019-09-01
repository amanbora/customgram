function getUsername(){
        var username = document.getElementById("username").value;
        console.log(username);
        if(username.length<1)
            alert("Username can't be void");

}

var getButton = document.getElementById("getButton");
getButton.addEventListener('click',getUsername,false);