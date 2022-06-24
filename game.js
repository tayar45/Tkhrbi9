let player=document.getElementById("player")
let block=document.getElementById("block")
let audio=new Audio("Jump_Sound.mp3")
let bgaud = new Audio("Naruto_Soundtrack.mp3")
window.addEventListener('touchstart',jump)
function jump(){
    player.className="jump"
    audio.play()
    bgaud.play()
    setTimeout(function(){
        player.className="nojump"
    },1000)   
}
var score=window.setInterval(function(){
  var score=Number(document.querySelector("#score span").innerHTML)
  
  score+=1
  document.querySelector("#score span").innerHTML=score
  
 },100)


window.setInterval(() => {
    if (block.offsetLeft<=52 && player.offsetTop>=330) {
        clearInterval(score)
        alert("score="+document.querySelector("#score span").innerHTML)
        setTimeout("location.reload(true)");
    }
  
 
});
