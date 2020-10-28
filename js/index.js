// Your code goes here
const topContent = document.querySelector('.main-navigation')
topContent.addEventListener('click', ()=> topContent.style.background = "red")

const topImg = document.querySelectorAll('img')
topImg.forEach((e)=>{e.addEventListener('mouseover', (x)=> x.target.style.border = '3px solid red'), e.addEventListener('mouseleave', (b)=> b.target.style.border = '0px')
})

function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale, 4));
    lastImg[0].style.transform = `scale(${scale})`;
    event.stopPropagation() 
}

let scale = 1;
const lastImg = document.querySelectorAll('img')
lastImg.onwheel = zoom;


const allButton = document.querySelectorAll('.btn');
allButton.forEach((e)=> e.addEventListener('dblclick', ()=> alert("Are you sure?")))

const value = document.querySelectorAll('p');

function logSelection(event){
    const log = document.getElementById('p');
    const selection = event.target.value.substring(evet.target.selectionStart, event.target.selectionEnd);
    log.textContent =`You selected: ${selection}`;
}
const input = document.querySelector('value');
input.addEventListener('select', logSelection)