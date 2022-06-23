import react from 'react';
const Counter = ({name}) =>{
   name=parseInt(name)
    const [count,setCount]=react.useState(name)
    const changeCount = (value)=>{
        setCount(count+value)
    }
    const changeCountDouble = () =>{
        setCount(count*2)
    }
    return(
        <>
        {count % 2 === 0 ?   <h1 style={{color :'green'}}>Count is {count}</h1> :  <h1 style={{color :'red'}}>Count is {count}</h1>}
        <button onClick={()=>changeCount(1)}>Increment</button>
        <button onClick={()=>changeCount(-1)}>Decrement</button>
        <button onClick={()=>changeCountDouble()}>Double</button>
        </>
    )
}
// http://www.omdbapi.com/?s=anaconda&apikey=db566529
export default Counter