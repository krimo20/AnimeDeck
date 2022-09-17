let menu = document.getElementById("menu")
let ul = document.getElementById("ul")
let cardDeck = document.getElementById("CardDeck")
let p2 = document.getElementById("p2")
let p3= document.getElementById("p3")
let main1 = document.getElementById("main1")
let content2 = document.getElementById("content2")
let Home= document.getElementById("Home")
let anime= document.getElementsByClassName("anime")
let anime1 = document.getElementById("anime1")
let anime2 = document.getElementById("anime2")
let anime3 = document.getElementById("anime3")
let anime4 = document.getElementById("anime4")
let anime5 = document.getElementById("anime5")

Home.onclick = function () {

  p2.style.visibility="visible"
  p3.style.visibility="visible"
  main1.style.visibility="visible"
  content2.style.visibility="hidden"
  anime1.setAttribute("class","anime")
  anime2.setAttribute("class","anime")
  anime3.setAttribute("class","anime")
  anime4.setAttribute("class","anime")
  anime5.setAttribute("class","anime")
}



cardDeck.onclick = function () {
  p2.style.visibility="hidden"
  p3.style.visibility="hidden"
  main1.style.visibility="hidden"
  content2.style.visibility="visible"
  anime1.setAttribute("class","animeprime anime1")
  anime2.setAttribute("class","animeprime anime2")
  anime3.setAttribute("class","animeprime anime3")
  anime4.setAttribute("class","animeprime anime4")
  anime5.setAttribute("class","animeprime anime5")
  
  
}


let i = 1
menu.onclick = function () {
  i+=1
    if (i%2===0) {
    ul.style.visibility="visible" }
    else {
        ul.style.visibility="hidden"
    }
}


let button = document.getElementById("button")
let video = document.getElementById("video")
let button2 = document.getElementById("button2")
 let p =0;


button.onclick = function() {
  if (p==0) {
    video.style.zIndex="10";
    p++
  }
  video.play()
  button.style.visibility="hidden"
  button2.style.visibility="visible"
}


button2.onclick = function() {
  video.pause()
  button2.style.visibility="hidden"
  button.style.visibility="visible"
}
