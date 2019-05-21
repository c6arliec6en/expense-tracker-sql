const category = document.querySelectorAll('.category')


category.forEach(item => {
  if (item.textContent == 'home') {
    item.innerHTML = `<i class="fas fa-home fa-4x m-auto icon"></i>`
  } else if (item.textContent == 'travel') {
    item.innerHTML = `<i class="fas fa-shuttle-van fa-4x m-auto icon"></i>`
  } else if (item.textContent == 'leisure') {
    item.innerHTML = `<i class="fas fa-grin-beam fa-4x m-auto icon"></i>`
  } else if (item.textContent == 'food') {
    item.innerHTML = `<i class="fas fa-utensils fa-4x m-auto icon"></i>`
  } else if (item.textContent == 'other') {
    item.innerHTML = `<i class="fas fa-pen fa-4x m-auto icon"></i>`

  }

})
