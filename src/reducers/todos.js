import { handleActions } from 'redux-actions'

const initState = {
    text: 'old',
}

const reducer = handleActions({
    CHANGE_TEXT: (state, action) => ({
        ...state,
        text: action.payload
    }),
}, initState)

export { initState, reducer }
