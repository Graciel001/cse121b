/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Benjamin Velazquez'
const currentYear = new Date().getFullYear()
const profilePicture = 'images/benjamin-velazquez.jpg'


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = `${currentYear}`
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`)

/* Step 5 - Array */
const foods = ['lasagna', 'pizza', 'calzone', 'burguers', 'french fries']
foodElement.textContent = foods.join(', ')

const newFood = 'tacos'
foods.push(newFood)
foodElement.innerHTML += `<br>${foods}`

foods.shift()
foodElement.innerHTML += `<br>${foods}`

foods.pop()
foodElement.innerHTML += `<br>${foods}`
