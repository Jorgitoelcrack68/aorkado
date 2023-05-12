function clickbutton() {
var nombre1=document.getElementById("inputuno").value
var nombre2=document.getElementById("inputdos").value
localStorage.setItem("nombre1",nombre1)
localStorage.setItem("nombre2",nombre2)
window.location="new.html"
}
