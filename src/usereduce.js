import React from "react";

function countReduce(count,action)
{
    switch(action.type)
    {
        case "Increment":{
            return count+1;
        }
        case "Decrement":{
            return count-1;
        }
        case "Reset":{
            return 0;
        }
        default:{
            return count;
        }
    }
}

function Counter()
{
    const [count, dispatch]= React.useReducer(countReduce,0);

    return (
      <>
         <p>Count:{count}</p>
        <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
      </>
    );
}
export default Counter;