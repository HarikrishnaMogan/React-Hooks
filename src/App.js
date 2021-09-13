import React from "react";
//using multiple states, it is a standard one
function App()
{
    const [count,setCount] = React.useState(0);
    const [name,setName] = React.useState("hari");

    const increment=()=>{
        setCount(count+1);
    }
     const dec=()=>{
         setCount(count-1);
     }
     const res=()=>{
         setCount(0);
     }
     const namech=()=>{
         setName("JK Rowling");
     }

    return(
        <>
        <p>Count:{count}</p>
        <p>Name:{name}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button><br/>
        <button onClick={namech}>Change Name</button>
        </>
    );
}

export default App;


//using a comman state,it is a not standard one
/*
function App()
{
    const [count,setCount] = React.useState({c:0,name:"hari"});
    const increment=()=>{
        setCount({...count,c:count.c+1});
        console.log(count);
    }
     const dec=()=>{
         setCount({...count,c:count.c-1});
         console.log(count);
     }
     const res=()=>{
         setCount({...count,c:0});
         console.log(count);
     }
    return(
        <>
        <p>Count:{count.c}</p>
        <p>name:{count.name}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button>
        </>
    );
}

export default App;*/