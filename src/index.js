import './styles.css'
// Импортируем функцию
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from './redux/rootReducer';
import {increment, decrement, asyncIncrement, changeTheme} from './redux/actions';
import { applyMiddleware, createStore } from 'redux';

const counter = document.getElementById('counter'),
    addBtn = document.getElementById('add'),
    subBtn = document.getElementById('sub'),
    asyncBtn = document.getElementById('async'),
    themeBtn = document.getElementById('theme');

// Создаем store
const store = createStore(rootReducer, applyMiddleware(thunk, logger)) // Он должен взаимодействовать с данными и говорить нам, что изменилось.

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    // Мы подписываемся на какие-либо изменения в нем

    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})
