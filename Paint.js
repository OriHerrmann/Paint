/**
 * Created by itc_user1 on 12/19/2016.
 */

var NUM_OF_COLOURS = 8;
var selectedColour = 0;
var beenClicked = 0;


function createMenu() {
    var menu = document.getElementById("menu");
    for (var i = 1; i <= NUM_OF_COLOURS; i++) {
        var newColour = document.createElement("img");
        newColour.src = "./images/s" + i + ".png";
        newColour.classList.add("colour");
        newColour.classList.add("clickable");
        newColour.id = "s" + i;
        newColour.addEventListener("click", selectColour);
        menu.appendChild(newColour);
    }
}

function downOne(e){
  beenClicked =1;

}
function upZero(e){
    beenClicked = 0;
}

function initCanvas(){
    var c = document.getElementById("canvas");
    c.addEventListener("mousedown",downOne);
    c.addEventListener("mouseup",upZero);
    c.addEventListener("mousemove",addColour);
    //c.addEventListener("drag",addSticker);
    var b = document.getElementById("clear")
    b.addEventListener("click", eraseAll);
    
}


function selectColour(e){
    selectedColour = e.target.id;
    console.log("chose ",selectedColour).style.cursor="pointer";
}

function addColour(e){
    if(beenClicked == 1) {


        var c = e.target;
        var newColour = document.createElement("img");
        newColour.src = "./images/" + selectedColour + ".png";
        newColour.classList.add("colour");
        c.appendChild(newColour);

        var x = e.pageX - 8;
        var y = e.pageY - 8;
        newColour.style.left = x + "px";
        newColour.style.top = y + "px";
        
    }
}
        function eraseAll(e){
            var c = document.getElementById("canvas");
            c.innerHTML="";
            
}

function init(){
    createMenu();
    initCanvas();
}

/**
 * Created by itc_user1 on 12/20/2016.
 */
