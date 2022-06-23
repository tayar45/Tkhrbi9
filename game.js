let player=document.getElementById("player")
let block=document.getElementById("block")
window.addEventListener('touchstart',jump)
function jump(){

    player.className="jump"

    setTimeout(function(){
        player.className="nojump"
    },1000)   
}
window.setInterval(() => {
    if (block.offsetLeft<=52 && player.offsetTop>=330) {
        alert("you lost")
        setTimeout("location.reload(true)");
    }
  
 
});