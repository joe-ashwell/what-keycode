// Creates variable to target html div
const mainKeycode = document.querySelector('div.main-keycode');
// Creates variable to check if on mobile
const mQ = window.matchMedia( "(max-width: 767px)" );

// Conditional to check if user is on mobile, and if so explain it won't work
if (mQ.matches) {

  // window width is less than 767px
  mainKeycode.innerHTML = `

  <i class="fa fa-mobile"></i>
  <h1 class="mobile">Oh no!</h1>
  <p class="mobile">This won't work on mobile or tablets!</p>

  `;

}

// Function to get the event keycode and key name
function getKeycode(event) {

  // Conditional to check if event key is blank (e.g. space key)
  if ( event.key === " " ) {
    eventKey = event.code.toLowerCase();
  } else {
    eventKey = event.key.toLowerCase();
  }

  // Updates the html with the keycode info
  mainKeycode.innerHTML = `

  <h1 class="keycode">${event.keyCode}</h1>
  <h2 class="keycode">${eventKey}</h2>

  `;

}

// Event listener in the window, calls the getKeycode function when a key is pressed.
window.addEventListener('keydown', getKeycode);