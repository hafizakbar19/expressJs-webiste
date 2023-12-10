const button = document.querySelector('button');
const dice = document.getElementById('dice');


const clickHandler = () => {
    let value = Math.floor(Math.random()*6 +1);
        dice.innerHTML = value;

};

button.onclick = clickHandler;