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

    this.move(this.position.x, this.position.y)

    this.context.lineTo(this.position.x, this.position.y);
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.color
    this.context.stroke();
  }

  move(origX, origY) {
    const choice = Math.ceil(Math.random() * (4 - 0) + 0);
    let newX
    switch (choice) {
      case 1:
        this.position = {x: origX + 8, y: origY}
        break;
      case 2:
        this.position = {x: origX - 8, y: origY}
        break;
      case 3:
        this.position = {x: origX, y: origY - 8}
        break;
      default:
        this.position = {x: origX, y: origY + 8}
    }
  }

  render() {

    this.drawFoo()
  }
}