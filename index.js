

// check if PC/Tablet/Mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches; 
const isTablet = window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches;
const isPC = window.matchMedia("(min-width: 1025px)").matches;
const deviceFlag = ()=>{if(isMobile){return "mobile"}else if(isTablet){return "tablet"}else if(isPC){return "pc"}} // Function to check the device type
const deviceType = deviceFlag(); // Get the device type
//width of the window in pixels
const gridElem = document.querySelector(".grid"); // Select the grid element
const windowHeight = window.innerHeight; // Get the height of the window in pixels
const gridHeight = windowHeight; // height minus padding`
const hobbyElemAll = document.querySelectorAll(".hobby"); // Select all elements with the class "hobby"

hobbyElemAll.forEach((elem, index) => {elem.style.zIndex = index;

}); // Set the z-index of each hobby element to its index in the NodeList
function ChangeHobbyZindex (){
    hobbyElemAll.forEach((elem,index)=>{
        elem.style.zIndex++;
        elem.style.zIndex=elem.style.zIndex % hobbyElemAll.length
        })
}



// hobbyButtonAll.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const elemClass = event.target.classList[0]; // Get the class of the clicked button
//         ChangeHobbyZindex(elemClass); // Call the function to change the z-index of the hobby elements
// })})

// ; // Set the z-index of each hobby element to its index in the NodeList
// function ChangeHobbyZindex(elemClass) {
//     hobbyElemAll.forEach((elem, index) => {
//         // Convert current zIndex to a number (default to 0 if unset or invalid)
//         let currentZ = parseInt(elem.style.zIndex) || 0;
//         let newZ = '';
//         if(elemClass=='buttonNext'){
//         newZ = (currentZ + 1) % hobbyElemAll.length;}else{newZ=(currentZ - 1 + hobbyElemAll.length) % hobbyElemAll.length;
//         }elem.style.zIndex = newZ;
//     });
//     console.log("zIndex changed");
// }



if(deviceType === "mobile"){
   
}else if(deviceType === "tablet"){
    
   
}else if(deviceType === "pc"){
    gridElem.style.height=`${gridHeight}px`; // Set the height of the grid element to the window height minus 100 pixels

}
