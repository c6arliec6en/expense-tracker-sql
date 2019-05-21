const filters = document.querySelectorAll('[data-filter="choose"]')
const form = document.querySelector('[data-filter="form"]')

filters.forEach(filter => filter.addEventListener('change', () => {
  form.submit()
}))

console.log(month)

