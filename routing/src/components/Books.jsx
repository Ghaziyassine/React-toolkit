import React from 'react'
import { useParams } from 'react-router-dom'

const Books = () => {
    const {id} = useParams();
    return (
        <h1 className="flex-justify text-3xl text-red-500 font-bold underline">
            Books{id}
        </h1>
    )
}

export default Books