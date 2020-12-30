import React from 'react'
import * as actions from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const Todos = props => {
    console.log('Todos render')

    const [counter, todos] = useSelector(state => [state.counter, state.todos])
    const dispatch = useDispatch()

    const change = val => dispatch(actions.changeText(val))
    const increment = () => dispatch(actions.increment(counter.count))

    return (
        <div>
            <h1>The text is {todos.text}</h1>
            <button onClick={() => change('new')}>change</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Todos
