// background
class Game {
  constructor() {
    this.ctx = null;
    this.bg = null;
    this.player = null;
  }

  startGame() {
    console.log("Starting");
    // accessing canvas
    const canvas = document.getElementById("canvas");

    // when starting game, want to create instance of player
    this.ctx = canvas.getContext("2d");

    const car = new Car(45, 100, 250, 400);

    this.player = car;
    console.log(this.ctx);

    // creating image
    const background = new Image();

    background.src = "./images/road.png";

    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
    };
    // could call this.updateCanvas here but sometimes takes too long to load
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX,

      this.player.posY,
      this.player.width,
      this.player.height
    );
    // console.log(this.player.posX, "here");
  }

  updateCanvas() {
    setInterval(() => {
      // clear everything and draw it again
      this.ctx.clearRect(0, 0, 500, 700);
      // getting context of canvas
      this.ctx.drawImage(this.bg, 0, 0, 500, 700);
      this.drawPlayer();
    }, 20);
  }
}

class Car {
  // starting position of car
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createCar();
  }
  // method to create car img
  createCar() {
    const car = new Image();

    car.src = "./images/car.png";

    return car;
  }

  moveRight() {
    // moving right
    if (this.posX < 445) this.posX += 10;
  }

  moveLeft() {
    // moving left
    if (this.posX > 0) this.posX -= 10;
  }

  // creating move method that receives argument
  move(event) {
    switch (event) {
      case "ArrowRight":
        // moveright and execte function
        this.moveRight();
        break;
      case "ArrowLeft":
        this.moveLeft();
        break;
    }
  }
}

// const ctx = document.getElementById("canvas").getContext("2d");

/*
// Road background img
const roadImg = new Image();
roadImg.src = "./images/road.png";

roadImg.onload = function () {
  ctx.drawImage(roadImg, 0, 0, 500, 700);
};

// Car player
function player() {
  const carImg = new Image();
  carImg.src = "./images/car.png";

  carImg.onload = function () {
    ctx.drawImage(carImg, 250, 580, 50, 90);
  };
}

// const player = carImg;

class Components {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
}
*/

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const game = new Game();
    game.startGame();
    document.addEventListener("keydown", (e) => {
      game.player.move(e.key);
    });
  };

  // function startGame() {
  // myGameArea.start();
  // }
};
