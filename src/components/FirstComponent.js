import React from 'react'


function helloWorld(p) {
    return (<div>
    <h1>Hello  {p.abc} </h1>
    {p.children}
    </div> 
    )

}

// const helloWorld =(prop)=><h1>Functional Component {prop.abc}</h1>

export default helloWorld