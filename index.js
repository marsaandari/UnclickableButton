const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('#question');
const yesBtn = document.querySelector('.button_yes');
const noBtn = document.querySelector('.button_no');

noBtn.addEventListener('click', () => {
    question.innerHTML = '<br> I guess not! Come back again tomorrow then!';
});

yesBtn.addEventListener('mouseover', () => {
    // Returns a random integer from 1 to 1000
    const i = Math.floor(Math.random() * 1000) + 1;
    // Returns a random integer from 1 to 500
    const j = Math.floor(Math.random() * 500) + 1;

    yesBtn.style.left = i + 'px';
    yesBtn.style.top = j + 'px';
});
