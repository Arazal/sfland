// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `



document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.features-container');
  
  // Function to add the 'move' class after a slight delay (adjust as needed)
  function startAnimation() {
      container.classList.add('move');
  }

  // Set a delay (2 seconds in this example) before adding the 'move' class
  setTimeout(startAnimation, 1000);
});
