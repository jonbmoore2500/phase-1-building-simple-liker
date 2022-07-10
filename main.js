// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// creates event listener for each heart with class 'like-glyph', 
// runs heartSwitch() on whichever is clicked
function clicking() {
  document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', (e) => {   
    heartSwitch(e);
  }
  )
}
)}

// handles server call and switching hearts
// calls mimicServerCall, if successful triggers .then and switches hearts
// if unsuccessful triggers .catch and goes to handleError function (see below)
function heartSwitch(e) {
  mimicServerCall().then(() => {
    //console.log('confirmation')
  if (e.target.textContent === EMPTY_HEART) {
    e.target.textContent = FULL_HEART
    e.target.className = 'activated-heart'
  } else if (e.target.textContent === FULL_HEART) {
    e.target.textContent = EMPTY_HEART
    e.target.className = ''
  }}
  )
  .catch(() => handleError())
}

// fills out handleError function for .catch
// if catch triggers, unhides error message then rehides after 3 secs
function handleError() {
  document.querySelector('#modal').className = '';
  setTimeout(() => {
    document.querySelector('#modal').className = 'hidden'}, 3000)
}

// invokes clicking function for everything to run
clicking();



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
