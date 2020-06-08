import './styles.css'
// Импортируем функцию
import {createStore} from './createStore';
import {rootReducer} from './redux/rootReducer';

const counter = document.getElementById('counter'),
    addBtn = document.getElementById('add'),
    subBtn = document.getElementById('sub'),
    asyncBtn = document.getElementById('async'),
    themeBtn = document.getElementById('theme');

// Создаем store
const store = createStore(rootReducer, 0) // Он должен взаимодействовать с данными и говорить нам, что изменилось.

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

asyncBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    // Мы подписываемся на какие-либо изменения в нем

    const state = store.getState();
    counter.textContent = state;
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark');
})
