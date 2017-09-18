class Mouse {
  constructor(context) {
    this.context = context
    this.mousePosition = { x: 0, y: 0 }
    this.attachMouseMoveListener()
  }

  get position() { return this.mousePosition }

  attachMouseMoveListener() {
    this.context.canvas.addEventListener('mousemove', e => this.setMousePosition(e))
  }

  setMousePosition(e) {
    const rect = this.context.canvas.getBoundingClientRect()
    this.mousePosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }
}

export const getMouse = (context) => {
  const mouse = new Mouse(context)
  return mouse
}
