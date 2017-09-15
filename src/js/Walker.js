export default class Walker {
  constructor(context) {
    this.position = {
      x: context.canvas.width / 2,
      y: context.canvas.height / 2
    }
    this.context = context

  }

  drawFoo() {
    this.context.beginPath();
    this.context.moveTo(this.position.x, this.position.y);
    var x, y;
    [x, y] = this.step()
    this.position = {x: this.position.x + x, y: this.position.y + y}

    this.context.lineTo(this.position.x, this.position.y);
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.color
    this.context.stroke();
  }

  generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  step() {
    const stepSize = 20
    return ([
      this.generateRandomNumber(-1 * stepSize, stepSize),
      this.generateRandomNumber(-1 * stepSize, stepSize)
    ])
    // console.log(choice);
    // let newX
    // switch (choice) {
    //   case 1:
    //     this.position = {x: origX + 8, y: origY}
    //     break;
    //   case 2:
    //     this.position = {x: origX - 8, y: origY}
    //     break;
    //   case 3:
    //     this.position = {x: origX, y: origY - 8}
    //     break;
    //   default:
    //     this.position = {x: origX, y: origY + 8}
    // }
  }

  render() {

    this.drawFoo()
  }
}