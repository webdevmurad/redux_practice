import './styles.css'

const counter = document.getElementById('counter'),
    addBtn = document.getElementById('add'),
    subBtn = document.getElementById('sub'),
    asyncBtn = document.getElementById('async'),
    themeBtn = document.getElementById('theme');

let state = 0;

function render() {
    counter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

render();