import React from 'react'

interface Pagination {
    nextPage: () => void,
    prevPage: () => void,
}

export default function Pagination({nextPage, prevPage}: Pagination) {
    return (
        <div className="flex">
            <button className="flex-1" onClick={prevPage}>Previous</button>
            <button className="flex-1" onClick={nextPage}>Next</button>
        </div>
    )
}
