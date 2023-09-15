import React from 'react'
import {increment,decrement} from './counterSlice'
import { useDispatch,useSelector } from 'react-redux'

function Count() {

    const {count} = useSelector((store)=>store.count)
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Count:{count} </h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count