import React from 'react';
import Child from './Child'

function Parent() {
    const drilledLastName = 'Smith';
    return (
        <>
            <h3>
                Hi! I am the parent and my last name is {drilledLastName}
            </h3>
            <Child lastName={drilledLastName}/>
        </>
    )
}

export default Parent