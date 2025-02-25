import React, { useContext } from 'react'
import Grandchild from "./Grandchild"
import LastNameContext from '../context/LastNameContext'

function Child({ lastName }){
    const theSecondLastName = useContext(LastNameContext);
    console.log("Child prop lastName:", lastName);
    console.log("Context second last name:", theSecondLastName);
    return (
        <>
            <h3>
                Hello I am the child and my last name is {lastName}
                and my second last name is {theSecondLastName}
            </h3>
            <Grandchild lastNameAgain={lastName} />
        </>
    )
}

export default Child