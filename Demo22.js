import React from 'react'
let m=[
    {Name:"Ansh",Age:21},
    {Name:"Hrsh",Age:21},
    {Name:"Arnim",Age:21},
    {Name:"Divyansh",Age:21},
    {Name:"Sahil",Age:21},

];
    
    export default function Demo22() {

  return (
    m.map((obj)=>{
        return(
            <>
            <p> your name is {obj.Name} and age is {obj.Age} </p>
            </>
        );
    }
    
    )

  )
}
