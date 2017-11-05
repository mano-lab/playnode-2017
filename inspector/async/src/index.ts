const weight = 72
const height = 1.8

async function calculateBMI(weight: number, height: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const result = weight / height / height

    resolve(result)
  })
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

async function writeMessage() {
  const bmi = await calculateBMI(weight, height)

  const message = createMessageWithBMI(bmi)

  document.write(message)
}

writeMessage()

