import React from 'react';
import Child from './Child';

function Grandchild ({lastNameAgain}) {
    return(
        <>
            <h3>
                What's up! I am the grandchild and my last name is {lastNameAgain}
            </h3>
        </>
    )
}

export default Grandchild