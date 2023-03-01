document.addEventListener('DOMContentLoaded', () => {
  /*
Aquí añadimos una clase al body al abrir en menú
*/
    const button = document.querySelector('.hamburguer');
    const elementToToggle = document.querySelector('body'); 

    button.addEventListener('click', () => {
      elementToToggle.classList.toggle('menu-is-open');
    });
});



/*
Este código es para hacer el hover del título del cover
*/
const boxes = document.querySelectorAll('.hover-item');

boxes.forEach((box) => {
  const initialPos = {};
  const hw = box.clientWidth / 2;
  const hh = box.clientHeight / 2;
  
  box.onmouseenter = (event) => {
    initialPos['x'] = event.offsetX;
    initialPos['y'] = event.offsetY;
  }
  
  box.onmousemove = (event) => {
    const { clientX, clientY, target } = event;
    const { clientWidth, clientHeight } = target;

    const mouseX = clientX - target.offsetLeft
    const mouseY = clientY - target.offsetTop

    const grab = () => {
      initialPos.x = hw;
      initialPos.y = hh;
      
      const xPos = `${(mouseX - hw) * 0.01}%`
      const yPos = `${(mouseY - hh) * 0.01}%`

      target.style.setProperty('--x', xPos)
      target.style.setProperty('--y', yPos)
    }
    
    target.classList.add('box--mouseover');
    if (
      (initialPos.x <= hw && mouseX >= hw) ||
      (initialPos.y <= hh && mouseY >= hh) ||
      (initialPos.x >= hw && mouseX <= hw) ||
      (initialPos.y >= hh && mouseY <= hh)
    ) { 
      grab();
    }
  }

  box.onmouseleave = () => {
    event.target.classList.remove('box--mouseover');

    event.target.style.setProperty('--x', 0)
    event.target.style.setProperty('--y', 0)
  }
});