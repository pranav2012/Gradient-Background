var backbtn = document.getElementById("btt")
var c1= document.getElementsByClassName("cbox")[0].getElementsByTagName("input")[0]
var c2= document.getElementsByClassName("cbox")[0].getElementsByTagName("input")[1]
var body =  document.getElementsByTagName("body")[0]
var info = document.getElementsByClassName("css_info")[0]

function change(){
    body.style.backgroundImage = "linear-gradient(to right," + c1.value + "," + c2.value + ")";
    info.textContent = body.style.backgroundImage + ";"
    }

c1.addEventListener("input",change);

c2.addEventListener("input",change);
