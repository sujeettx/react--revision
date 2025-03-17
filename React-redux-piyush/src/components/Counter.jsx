import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from '../features/counter'
const Counter = () => {
const dispatch = useDispatch()
const countervalue = useSelector(state => state.counter)
  return (
    <div>
        <h1>Counter {countervalue}</h1>
        <button onClick={()=>dispatch(increment())}>+</button> {'       '}
        <button onClick={()=>{dispatch(decrement())}}>-</button>

    </div>
  )
}

export default Counter
