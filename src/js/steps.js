import { generateRandomNumber } from './utils';

export const anyDirection = (stepSize = 10) => {
  return ([
    generateRandomNumber(-1 * stepSize, stepSize),
    generateRandomNumber(-1 * stepSize, stepSize)
  ])
}

export const probabilityStep = () => {
  const choice = generateRandomNumber(0,1)
  let newX = 0;
  let newY = 0;

  if (choice < 0.1) {
    newX = 1.0;
  } else if (choice < 0.2) {
    newX = -1.0;
  } else if (choice < 0.3) {
    newY = 1.0;
  } else {
    newY = -1.0;
  }
  return [newX, newY]
}

export const mouseStep = (mousePos, currentPos) => {
  const stepSize = 2;
  const choice = generateRandomNumber(0,1)
  const mouseDirectionX = currentPos.x - mousePos.x > 0 ? stepSize : stepSize * -1
  const mouseDirectionY = currentPos.y - mousePos.y > 0 ? stepSize : stepSize * -1
  let newX = 0
  let newY = 0

  if (choice < 0.5) {
    const mouseDirectionX = currentPos.x - mousePos.x <= 0 ? stepSize : stepSize * -1
    const mouseDirectionY = currentPos.y - mousePos.y <= 0 ? stepSize : stepSize * -1
    return [mouseDirectionX, mouseDirectionY]
  } else {
    return probabilityStep()
  }
}


export const steps = {
  anyDirection,
  probabilityStep,
  mouseStep
}
