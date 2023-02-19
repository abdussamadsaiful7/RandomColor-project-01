/***
 * projects requirement;
 * -Change the background color by generating rgb color clicking a button;s
 * 
 */


//step-1 create onload handler,
window.onload = () => {
    main();
};

function main(){
 const root = document.getElementById('mixColor');
 const btn = document.getElementById('change-btn');

 btn.addEventListener('click', function(){
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
 })
};

//step-2 random color generator function,
function generateRGBColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
};
//step-3 collect all necessary reference,
// ster-4  handle the click event,




