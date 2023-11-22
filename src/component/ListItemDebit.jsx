import React from 'react'

const ListItemDebit = ({debitmap ,handleDelete}) => {
    return (
        <li>
            <h2>{debitmap.Transction}</h2>
            <h5> ₹{debitmap.Amount}</h5>
            <button onClick={()=>handleDelete(debitmap.id)}>DELETE</button>
        </li>
    )
}

export default ListItemDebit