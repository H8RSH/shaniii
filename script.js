const btn=document.getElementById("giftBtn");

btn.onclick=function(){

btn.innerHTML="❤️ Opening...";

setTimeout(function(){

window.location.href="flower.html";

},1800);

}
