let player=document.getElementById("player")
let block=document.getElementById("block")
window.addEventListener('touchstart',jump)
function jump(){

    player.className="jump"

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