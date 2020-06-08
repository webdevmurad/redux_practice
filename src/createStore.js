// rootReducer передаем его для изменения в reducer, и initialState - это начальное состояние объекта
export function createStore(rootReducer, initialState) {
    // С помощью замыкания мы создаем приватную переменную
    // В rootReducer передаем начальное состояние объекта и type для action.
    let state = rootReducer(initialState, {type: '__INIT__'})
    // Создаем слушаетелей
    const subscribes = []

    return {
        // Стандартные методы store
        dispatch(action) {
            // Данный метод говорит что-то поменялось
            state = rootReducer(state, action)
            subscribes.forEach(sub => sub())
        },
        subscribe(callback) {
            // Данный метод говорит что все слушатели, которые слушают должны что-то поменять
            subscribes.push(callback)
        },
        getState() {
            // Тут мы получаем само состояние
            return state
        }
    }
}