function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');

const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');

const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', handleCreateButtonClick);
destroyButton.addEventListener('click', handleDestroyButtonClick);

function handleCreateButtonClick() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
};

function handleDestroyButtonClick() {
  destroyBoxes();
};

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxes);
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}