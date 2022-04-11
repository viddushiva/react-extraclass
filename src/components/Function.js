import React, { useState } from 'react'


function Function() {
   const [peru,setPeru]= useState("mahendra")
   
    return(
        <>
       { peru==="mahendra"?
        <h1>its summer</h1>:
        <h1>its winter</h1>}
<h3>its a functional component</h3>
        <h1>my name is {peru}</h1>
        <button onClick={()=>setPeru("dhoni")}>click me</button>
        </>
    )
}
 

export default Function

  