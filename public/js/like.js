window.onload = function(){
    
    var getButton = document.getElementById("getButton");
    getButton.addEventListener('click',getUsername,false);


    function getUsername(){
        var name = document.getElementById("username");
        console.log(name.value);
        if(name.value.length<1)
            alert("Username can't be void");
        else module.exports = name.value;
    }

   

}

