import { useState } from "react";

function Hooks() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  function increment() {
    setCount((c)=> c+1);
    if(count%5==0){
        setCount1(count1+1)
    }
  }

  function decrement() {
    setCount(count - 1);
    
  }
  function increment1sec(){
      setTimeout(increment,1000);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment1sec}>Async increment</button>
      
      
      
      <h1>{count1}</h1>
    </div>
  );
}

export default Hooks;