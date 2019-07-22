// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
  {copy: 'a Columbus based web designer', background: '#404040', circle: '#6a5c8a'},
  {copy: "Joan Jett's biggest fan", background: '#800000', circle: '#fff'},
  {copy: 'looking for a job at the start of September', background: '#99994d', circle: '#6699cc'},
  {
    copy: 'letting you <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A440c0052-7262-493a-977f-5ab051da8cb6" download>download her PDF</a>',
    background: '#204060',
    circle: '#336600'
  }
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// make a next function to increase pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }

  //if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
