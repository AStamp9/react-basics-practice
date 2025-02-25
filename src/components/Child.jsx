import React from 'react'
import Grandchild from "./Grandchild"

function Child({ lastName }){
    return (
        <>
            <h3>
                Hello I am the child and my last name is {lastName}
            </h3>
            <Grandchild lastNameAgain={lastName} />
        </>
    )
}

export default Child