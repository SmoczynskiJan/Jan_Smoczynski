

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
function ChangeHobbyZindex (elemClass){

    hobbyElemAll.forEach((elem) => {console.log(`zIndex ${elem.style.zIndex}`)}); // Log the z-index of each hobby element to the console
    if(elemClass==='buttonNext'){
        hobbyElemAll.forEach((elem)=>{
            let elemZ = parseInt(elem.style.zIndex); // Get the current z-index of the element
            elemZ++;
            elem.style.zIndex=elemZ % hobbyElemAll.length;
            showZIndex0(elem); // Call the function to show/hide the element based on its z-index
        })
    }else if(elemClass==='buttonPrevious'){
        hobbyElemAll.forEach((elem)=>{
            let elemZ = parseInt(elem.style.zIndex);
            elemZ--;
            elem.style.zIndex=(elemZ + hobbyElemAll.length) % hobbyElemAll.length;
            showZIndex0(elem); // Call the function to show/hide the element based on its z-index
        })
    }else{
        hobbyElemAll.forEach((elem)=>{
            showZIndex0(elem); // Call the function to show/hide the element based on its z-index
        })
    }
}
function showZIndex0(elem){
    elem.style.zIndex != '0'?elem.style.visibility='hidden':elem.style.visibility='visible'; // Set the z-index of each hobby element to its index in the NodeList

}

ChangeHobbyZindex(); // Call the function to change the z-index of the hobby elements




if(deviceType === "mobile"){
   
}else if(deviceType === "tablet"){
    
   
}else if(deviceType === "pc"){
    gridElem.style.height=`${gridHeight}px`; // Set the height of the grid element to the window height minus 100 pixels

}
