//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"), 
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
    puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
    dropZones = document.querySelectorAll(".drop-zone");
//console.log(theButtons);
//console.log(puzzleBoard);
let draggedPiece;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg')
    
    //bug fix 2 will go here
    //will use a foreach loop nd if statement
    //I want to loop through dropzones and check if there is?
    //check with firstChild
    //if there is child
    //puzzlePieceDiv.appendChild(something needs to go here)

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`

}

function handleStartDrag() {
    console.log("Started dragging this piece:", this)
    draggedPiece = this;
}
function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, cloud be e, evt a well
    console.log("dragged over me");
}


function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
    //this lines movs to dragged piece from the left side of the board
    //into whatever dropzone we choose.
    
    //bugFix 1 will go here
    //could also check if there are no children then if so append
    if(this.children.length >=1) {
        return;
    }
    //this.appendChild(draggedPiece);
}

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));