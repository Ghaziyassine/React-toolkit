import React from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/books/1'>Book1</Link>
                </li>
                <li>
                    <Link to='/books/2'>Book2</Link>
                </li>
            </ul>

        </>
    )
}

export default BookList