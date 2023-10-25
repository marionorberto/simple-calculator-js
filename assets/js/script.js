const display = document.querySelector('.display');

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) fillInput(e.target);
    if(display.value.length <= 15) {
        display.style= 'font-size: 25px;'; 
    } if (display.value.length > 15) {
        display.style= 'font-size: 22px;'; 
    } if(display.value.length > 20) {
        display.style= 'font-size: 18px;'; 
    }
        
    if(e.target.classList.contains('AC')) clearInput();
    if(e.target.classList.contains('DEL')) deleteOne();
    if(e.target.classList.contains('pi')) insertPiValue();
    if(e.target.classList.contains('equal')) solve();
});

const fillInput = (elem) => {
    display.value += elem.innerText;
}

const clearInput = () => display.value = '';
const deleteOne = () => display.value = display.value.slice(0, -1);
const insertPiValue = () => display.value += Math.PI;

const solve = () => {
    return console.log('... missing something!!!');
}

