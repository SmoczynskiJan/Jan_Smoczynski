// Get the height of the window in pixels
const windowHeight = window.innerHeight;
const gridElem = document.querySelector(".grid");
const gridHeight = windowHeight-100; // Adjust the height as needed`

console.log(`Window height: ${gridHeight}px`);

gridElem.style.height=`${gridHeight}px`;