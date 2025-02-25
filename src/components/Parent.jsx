import React from 'react';
import Child from './Child'
import LastNameContext from '../context/LastNameContext';

function Parent() {
    const drilledLastName = 'Smith';
    const secondLastName = 'Johnson';

    return (
        <div>
            <LastNameContext.Provider value={secondLastName}>
                <h3>
                    Hi! I am the parent and my last name is {drilledLastName}
                </h3>
                <Child lastName={drilledLastName}/>
            </LastNameContext.Provider>
        </div>
    )
}

export default Parent