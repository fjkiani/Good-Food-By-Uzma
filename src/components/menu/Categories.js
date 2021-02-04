import React from 'react'



export default function Categories({filterItems}) {
    return (
        <div className="btn-container">
        <button className="filter-btn" onClick={()=>filterItems("bites")}>
            bites
        </button>
            
        </div>
    )
}
