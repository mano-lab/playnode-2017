const weight = 72
const height = 1.8

const weightInput = document.createElement('input')
weightInput.setAttribute('placeholder', 'Weight')
const heightInput = document.createElement('input')
heightInput.setAttribute('placeholder', 'Height')
const calculateButton = document.createElement('button')
calculateButton.innerHTML = 'Calculate'
const resultDiv = document.createElement('div')
document.body.appendChild(weightInput)
document.body.appendChild(heightInput)
document.body.appendChild(calculateButton)
document.body.appendChild(resultDiv)

calculateButton.addEventListener('click', () => {
  try {
    const weight = parseInt(weightInput.value, 10)
    const height = parseInt(heightInput.value, 10) / 100
    const bmi = calculateBMI(weight, height)
    const message = createMessageWithBMI(bmi)
    resultDiv.innerHTML = message
  } catch (error) {
    resultDiv.innerHTML = error.message

    throw error
  }
})

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
