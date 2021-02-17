var qweertWS7 = document.querySelector("#burger-button");
var boxBox = document.querySelector("#box");
var close = document.querySelector("#close")
var overlay = document.querySelector("#overlay")


qweertWS7.addEventListener("click",function(){
  boxBox.classList.toggle("open");
  overlay.classList.toggle("opened")
});

close.addEventListener("click",function(){
  boxBox.classList.remove("open");
  overlay.classList.remove("opened")
})