const weight = 72
const height = 1.8

function calculateBMI(weight: number, height: number): number {
  return weight / height / height
}

function createMessageWithBMI(bmi: number) {
  if (bmi > 24) {
    return '과체중입니다.'
  } else if (bmi > 20) {
    return '보통입니다.'
  } else {
    return '저체중입니다.'
  }
}

function run() {
  const bmi = calculateBMI(weight, height)

  const message = createMessageWithBMI(bmi)

  document.write(message)
}

setTimeout(run, 100);
