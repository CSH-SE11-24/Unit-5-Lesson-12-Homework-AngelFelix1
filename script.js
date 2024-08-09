console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let lightB= document.querySelector("#light")
console.log(lightB)
let DarkB = document.querySelector("#dark")

// Extra credit: Select the navbar


// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar
lightB.addEventListener("click", function(event){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
})


// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar

DarkB.addEventListener("click", function(even){
  document.body.style.backgroundColor = "black"
  document. body.style.color = "white"
})

// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let photo = document.getElementsByClassName("#card-img-top rounded")

// Console log the length of the array to confirm you have all 4 images
console.log(photo.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


photo[0] addEventListener("mouseover", function(event){
  photo[0] src =" images/ears.gif"
})


photo[0] addEventListener("mouseover", function(event){
  photo[0] src =" images/ears.jpg"
})


photo[1] addEventListener("mouseover", function(event){
  photo[1] src =" images/halp.gif"
})


photo[1] addEventListener("mouseout", function(event){
  photo[1] src =" images/halp.jpg"
})


photo[2] addEventListener("mouseover", function(event){
  photo[2] src =" images/husky.gif"
})


photo[2] addEventListener("mouseout", function(event){
  photo[2] src =" images/husky.jpg"
})


photo[3] addEventListener("mouseover", function(event){
  photo[3] src =" images/dance.gif"
})


photo[3] addEventListener("mouseout", function(event){
  photo[3] src =" images/dance.jpg"
})