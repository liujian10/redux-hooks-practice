import { handleActions } from 'redux-actions'

const initState = {
    count: 0,
}

const reducer = handleActions({
    CHANGE_COUNT: (state, action) => ({
        ...state,
        count: action.payload
    }),
}, initState)

export { reducer }
