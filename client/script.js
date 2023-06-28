
socket = io();

var side = 20, m = 25, n = 53;
multForGrass = 8
var grassColor = "green"
var grassEaterColor = "yelow"
var gishatichColor = "red"
var gishatichEaterColor = "blue"
function setup() {

    frameRate(40);

    createCanvas(n * side, m * side);

    background('#e8e8e8');

    button1 = document.getElementById("garun")
    button2 = document.getElementById("amar")
    button3 = document.getElementById("ashun")
    button4 = document.getElementById("dzmer")
    button1.addEventListener("click", onColorChange);
    button2.addEventListener("click", onColorChange);
    button3.addEventListener("click", onColorChange);
    button4.addEventListener("click", onColorChange)
}
function displayDate() {
    document.getElementById("demo").innerHTML ="ԴՈՒՔ ԸՆՏՐԵԼ ԵՔ "+event.target.innerHTML + " ԵՂԱՆԱԿԸ: "+ "ԿԱՐՈՂ ԵՔ ԸՆՏՌԵԼ ՈՒՐԻՇ :";
  }
function onColorChange() {
     if (event.target.id == "garun") {
        grassColor = "#38FF6E"
        multForGrass = 4
        gishatichColor = "#D43F04"

        grassEaterColor = "#EBB41C"
        gishatichEater = "#4820D6"
    } else if (event.target.id == "amar") {
        grassColor = "#81FF38"
        multForGrass = 6
        gishatich = "#EB411E"
        grassEaterColor = "#D6C81C"
        gishatichEater = "#353CEB"
    }
    else if (event.target.id == "ashun") {
        grassColor = "#e5f536"
        multForGrass = 10
        gishatich = "#D44139"
        grassEaterColor = "#D48B37"
        gishatichEater = "#2456D6"
    }
    else if (event.target.id == "dzmer") {
        grassColor = "#F0FEF5"
        multForGrass = 12
        gishatich = "#F5A169"
        grassEaterColor = "#CDF582"
        gishatichEater = "#69B5FA"
    }
    let data = {
        multForGrass: multForGrass
    }
    socket.on("matrix", drawMatrix);
    socket.emit("bazmacmanHamar", data)
}

function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(grassColor);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            else if (matrix[y][x] == 2) {
                fill(grassEaterColor);
            }

            else if (matrix[y][x] == 3) {
                fill(gishatichColor);
            }
            else if (matrix[y][x] == 4) {
                fill(gishatichEaterColor);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }

            else if (matrix[y][x] == 6) {
                fill("purple");
            }
            rect(x * side, y * side, side, side);
        }
    }
}


socket.on("matrix", drawMatrix);






















































