const container = document.querySelector('.container');
const btn = document.querySelector('.new');
const rnd = document.querySelector('.rnd');
const shade = document.querySelector('.shade');

const properties = {isRandom: false, isShaded: false};

btn.addEventListener('click', () => {
  const dimension = prompt("How many squares per side?");
  container.innerHTML = '';
  populateGrid(dimension);
});

rnd.addEventListener('click', () => {
  properties['isRandom'] = !properties['isRandom'];
  rnd.textContent = properties['isRandom'] ? "Black" : "Colour";
});

shade.addEventListener('click', () => {
  properties['isShaded'] = !properties['isShaded'];
  shade.textContent = properties['isShaded'] ? "No Shade" : "Shade";
});

function populateGrid(n) {
  container.style['grid-template-columns'] = `repeat(${n}, 1fr)`;
  container.style['grid-template-rows'] = `repeat(${n}, 1fr)`;
  
  for (let i = 0; i < n*n; i++) {
    const div = document.createElement('div');
    div.classList.add("cell");
    div.addEventListener('mouseenter', hoverFunction);
    container.appendChild(div);
  }
}

function hoverFunction() {
  this.style.backgroundColor = properties['isRandom'] ? getRandomColour() : "black";
  this.style.opacity = properties['isShaded'] ? Math.min(+this.style.opacity + 0.1, 1) : 1;
}

function getRandomColour() {
  const chars = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += chars[Math.floor(Math.random() * chars.length)];
  }
  return colour;
}

populateGrid(16);