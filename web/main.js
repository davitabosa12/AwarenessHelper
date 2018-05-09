window.onload = function(){
    init();
}

function init(){
    var btnFence = document.getElementById("create_fence");
    btnFence.addEventListener("click",dialogBox,false)
}

function dialogBox(){
    var fenceName = prompt("Nome da fence");
}