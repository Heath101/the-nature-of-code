import { getMouse } from './Mouse';
import { generateRandomNumber } from './utils';
import { steps } from './steps';

export default class Walker {
  constructor(context) {
    this.position = {
      x: context.canvas.width / 2,
      y: context.canvas.height / 2
    }
    this.context = context
    this.mouse = getMouse(this.context)
  }

  drawFoo() {
    let x, y;

    this.context.beginPath();
    this.context.moveTo(this.position.x, this.position.y);

    [x, y] = steps.mouseStep(this.mouse.position, this.position);
    this.position = {x: this.position.x + x, y: this.position.y + y}

    this.context.lineTo(this.position.x, this.position.y);
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.color
    this.context.stroke();
  }

  render() {
    this.drawFoo()
  }
}
