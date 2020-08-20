const mainKeycode = document.querySelector('div.main-keycode');

function getKeycode(event) {

  if ( event.key === " " ) {
    eventKey = event.code.toLowerCase();
  } else {
    eventKey = event.key.toLowerCase();
  }

  mainKeycode.innerHTML = `

  <h1 class="keycode">${event.keyCode}</h1>
  <h2 class="keycode">${eventKey}</h2>
  `;



  console.log(event);
}

window.addEventListener('keydown', getKeycode);