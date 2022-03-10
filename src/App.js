import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = ()=>{
    dispatch({type:'INC'})
  }
  const decrement = ()=>{
    dispatch({type:'DEC'})
  }
  const addBy = ()=>{
    dispatch({type:'addBy',payload:10})
  }
  const reset = ()=>{
    dispatch({type:'RESET',payload:0})
  }

  return (
    <div>
      <h1>React App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add by 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App