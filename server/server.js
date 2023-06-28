var express = require("express");

var fs = require('fs');

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("../client"));

app.get("/", function (req, res) {

    res.redirect("index.html");

});

server.listen(3000, function () {

    console.log("App is running on port 3000");

});

gishatichEaterinArr = []
gishatichEaterArr = []
grassArr = []
grassEaterArr = []
gishatichArr = []
energyArr = []
mardArr = []

LivingCreature = require("./game/LivingCreature")
Grass = require("./game//grass.class")
GrassEater = require("./game/grasseater.class")
Gishatich = require("./game/gishatich.class")
Energy = require("./game/energy.class")
GishatichEater = require("./game/gishaticheater.class")
Mard = require("./game/mard.class")

 multForGrass=8
 multForGrassEater=8
 multForGishatich=8
 multForGishatichEater=8


io.on("connection", function (socket) {
    socket.on("bazmacmanHamar",function(data){
        multForGrass=data.multForGrass
    })
        setInterval(drawForBackend, 5000)
          
});


matrix = [
    [0, 2, 2, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 3, 4, 3, 3, 3, 0, 0, 0, 2, 5, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 4, 3, 3, 3, 3, 2, 3, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 2, 2, 2, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 5, 1, 0, 0, 2, 2, 2, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 2, 2, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 6, 0, 0, 1, 1, 0, 0, 0, 1, 0, 2, 6, 2, 2, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 3, 3, 1, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 6, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 3, 3, 3, 0, 1, 0, 0, 2, 2, 3, 3, 2, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 2, 2, 2, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 3, 1, 3, 2, 3, 3, 3, 3, 1, 2, 0, 0, 0, 1, 1, 0, 0, 3, 3, 0, 1, 1, 3],
    [1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 4, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 6, 1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 1, 0, 6, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2, 2, 2, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 6, 0, 6, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 2, 2, 3, 1, 0, 0, 0, 1, 1, 0, 6, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 0, 6, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 1, 3, 3, 3, 1, 1, 3, 3, 3, 3, 2, 3]
    [1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 0, 1, 2],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 2, 2, 3, 2, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 3, 1, 3, 3, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 6, 1, 1, 0, 3, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3, 3, 6, 3, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
];

var isFemale = true

for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var grEater = new GrassEater(x, y, 2);
            grassEaterArr.push(grEater);
        }
        else if (matrix[y][x] == 3) {
            isFemale=!isFemale
            var grGishatic = new Gishatich(x, y, 3,isFemale);
            gishatichArr.push(grGishatic)
        }
        else if (matrix[y][x] == 4) {
            var grGishatichEater = new GishatichEater(x, y, 4);
            gishatichEaterArr.push(grGishatichEater)
        }
        else if (matrix[y][x] == 5) {
            var grEnergy = new Energy(x, y, 5);
            energyArr.push(grEnergy)
        }
        else if (matrix[y][x] == 6) {
            var grMard = new Mard(x, y, 6);
            mardArr.push(grMard)
        }
    }
}
function drawForBackend() {

    for (var i in grassArr) {
        grassArr[i].mul(multForGrass)
    }
  
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mul(multForGrassEater)
        grassEaterArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mul(multForGishatich)
        gishatichArr[i].die()

    }
    for (var i in gishatichEaterArr) {
        gishatichEaterArr[i].eat()
        gishatichEaterArr[i].move()
        gishatichEaterArr[i].mul(multForGishatichEater)
        gishatichEaterArr[i].die()

    }
    for (var i in energyArr) {

        energyArr[i].move()
        energyArr[i].mul()
        energyArr[i].energyGive()

    }
    for (var i in mardArr) {

        mardArr[i].move()
        mardArr[i].mul()
        mardArr[i].eat()

    }

    let sendData = {
        matrix: matrix
    }
    statistics = {
        grasses: grassArr.length,
        grassEaters: grassEaterArr.length,
        predators: gishatichArr.length,
        gishatichEater: gishatichEaterArr.length,
        mard: mardArr.length,
        energy: energyArr.length,
      
    }
    fs.writeFileSync('statistics.json', JSON.stringify(statistics, undefined, 2))
    mystatistics = fs.readFileSync('statistics.json').toString()

    io.sockets.emit("sendStatistics", JSON.parse(mystatistics))
    io.sockets.emit("matrix", sendData)

}
setInterval(drawForBackend, 1000)
