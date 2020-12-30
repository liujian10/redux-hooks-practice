import React from 'react'
import * as actions from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const App = props => {
    // 用 useContext 来获取 state 与 dispatch
    console.log('App', props)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const increment = val => dispatch(actions.increment(val))
    const decrement = val => dispatch(actions.decrement(val))

    return (
        <div>
            <h1>The count is {counter.count}</h1>
            <button onClick={() => increment(counter.count)}>+</button>
            <button onClick={() => decrement(counter.count)}>-</button>
        </div>
    )
}

export default App