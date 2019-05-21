const expense = document.querySelectorAll('[data-amount="expense"]')
const sumPrice = document.querySelector('[data-amount="sum"]')

function sum() {
  sum = 0
  expense.forEach(item => {
    const money = parseInt(item.textContent)
    sum += money
  })
  return sum
}

sumPrice.textContent = sum()


