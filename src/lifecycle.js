import React, { useEffect } from "react";

function Life()
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
     
     //component did mount
     useEffect(()=>{
         console.log("component did mount");
     },[]); 
      
     //component did update
     useEffect(()=>{
         console.log("component did update");
     });

     //component did update only when count changed
     useEffect(()=>{
         console.log("count changed");
     },[count]);
     
     //component will unmount
     useEffect(()=>{
         return ()=>{
             console.log("component will unmount");
         }
     })

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

export default Life;