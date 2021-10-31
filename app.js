// Tabs 

const buttons = document.querySelectorAll('.choice-time__button');
const blcoks = document.querySelectorAll('.choice-box__block');

buttons.forEach(item => {
  item.addEventListener('click', function () {
    let currentButton = item;
    let tabId = currentButton.getAttribute('data-but');
    let currentBlock = document.querySelector(tabId);

    buttons.forEach(item => {
      item.classList.remove('active');
    })

    blcoks.forEach(item => {
      item.classList.remove('active');
    })

    currentButton.classList.add('active');
    currentBlock.classList.add('active');
  })
});

// / Tabs 

// Questions 

const title = document.querySelectorAll('.qeust-box__block_title');
const block = document.querySelectorAll('.quest-box__block_text');
const box = document.querySelector('.quest-box__block');

title.forEach(item => {
  item.addEventListener('click', function () {
    let currentTitle = item;
    let titleId = currentTitle.getAttribute('data-title');
    let currentBox = document.querySelector(titleId);

    box.classList.toggle('active');
    currentTitle.classList.toggle('active');
    currentBox.classList.toggle('active');
  })
});

// / Questions 

// HeaderMenu 

const buttonMenu = document.querySelector('.header-burger');
const buttonClose = document.querySelector('.header-close');
const headerMenu = document.querySelector('.headerMenu');
const body = document.querySelector('body');

buttonMenu.addEventListener('click', function () {
  headerMenu.classList.add('active');
  buttonClose.classList.remove('hidden');
  buttonMenu.classList.add('hidden');
  body.classList.add('active');
})

buttonClose.addEventListener('click', function () {
  headerMenu.classList.remove('active');
  buttonClose.classList.add('hidden');
  buttonMenu.classList.remove('hidden');
  body.classList.remove('active');
})

