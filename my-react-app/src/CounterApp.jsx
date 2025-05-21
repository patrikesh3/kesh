import React, { useState} from 'react'

function CounterApp(){
const [count, setCount]= useState(0);
return (
  <div>
  <h1>Counter App</h1>
   <h2>Current Count: {count}</h2>
   <h1>Count Up</h1>
    <button onClick={() => setCount(count + 1)}>UP</button>
    <h1>Count Down</h1>
<button onClick={() => setCount(count - 1)}>DOWN</button>
  </div>
   
);
}
export default CounterApp