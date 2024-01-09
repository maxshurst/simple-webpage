const box = document.getElementById('box')

box.addEventListener('click', changeColor);



function changeColor() {
    const R = Math.floor(Math.random()*255);   
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);


box.style.backgroundColor = `rgb(${R},${G},${B})`;
}





const box2 = document.getElementById('box2')




box2.addEventListener('click', changeColor2);



function changeColor2() {
    const R = Math.floor(Math.random()*255);   
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);


box2.style.backgroundColor = `rgb(${R},${G},${B})`;
}



const box3 = document.getElementById('box3')




box3.addEventListener('click', changeColor3);



function changeColor3() {
    const R = Math.floor(Math.random()*255);   
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);


box3.style.backgroundColor = `rgb(${R},${G},${B})`;
}



const box4 = document.getElementById('box4')




box4.addEventListener('click', changeColor4);



function changeColor4() {
    const R = Math.floor(Math.random()*255);   
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);


box4.style.backgroundColor = `rgb(${R},${G},${B})`;
}