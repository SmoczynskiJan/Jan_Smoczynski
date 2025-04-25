

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



if(deviceType === "mobile"){
   
}else if(deviceType === "tablet"){
    
   
}else if(deviceType === "pc"){
    gridElem.style.height=`${gridHeight}px`; // Set the height of the grid element to the window height minus 100 pixels

}
