import { INCREMENT, DECREMENT, CHANGE_THEME } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

// Теперь в index файле мы можем диспачить не осознанные объекты а уже функции.