
const LivingCreature = require("./LivingCreature")
let random = require("./random");

module.exports = class Mard extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    move() {
        var empty = random(this.chooseCell(0));

        if (empty) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }



    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    grasArr.splice(i, 1)
                    break;
                }

            }
            this.energy += 2
        }
    }
    mul() {
        var empty = this.chooseCell(0);
        var empty = random(empty);
        if (empty && this.energy >= 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;

            var newMard = new Mard(newX, newY, 6);
            mardArr.push(newMard);
            this.energy = 8;
        }
    }
}