var massage = document.getElementById("massage");
var index=Number(localStorage.getItem("indexArr"));
var data =JSON.parse(localStorage.getItem("parsonalData"));
var logout=document.getElementById("logOut");

var signin= document.getElementById("signin");
var login= document.getElementById("logInButton");
var inner=signin.innerHTML;
if(inner=="Sign Out"){
massage.innerHTML=` welcome ${data[index].name}`;
}
signin.addEventListener("click",toggle);
function toggle(){
  if(inner=="Sign Out"){
    displayout();
  }
}
function displayout(){
  inner="Sign In";
  signin.classList.remove("btn btn-outline-warning");
  signin.classList.add("rege")
}



