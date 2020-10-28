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
lastImg[0].onwheel = zoom;


const allButton = document.querySelectorAll('.btn');
allButton.forEach((e)=> e.addEventListener('dblclick', ()=> alert("Are you sure?")))

const logo = document.querySelector('h1');

document.addEventListener('keydown', (x) =>{ 
    if (x.key === 'Shift'){
        logo.setAttribute('style', 'transform: rotate(.5turn)')
    } else if (x.key === 'Enter') {
        logo.setAttribute('style', 'transform: none')
    }
});

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

const a = document.querySelector('body')

  window.addEventListener('resize', ()=> a.setAttribute('style', 'background: green'));

  window.addEventListener('copy', (event) => {
    alert('copy action initiated')
});
