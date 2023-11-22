import React from 'react'

const ListItemCredit = ({creditmap ,handleDelete}) => {


    return (
        <li>
            <h2>{creditmap.Transction}</h2>
            <h5> ₹{creditmap.Amount}</h5>
            <button onClick={()=>handleDelete(creditmap.id)}>DELETE</button>

        </li>
    )
}

export default ListItemCredit