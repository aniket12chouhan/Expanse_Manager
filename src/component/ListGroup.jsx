import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteExp, TotalAmount } from '../feature/ExpenseSlice/expenseSlice'
import ListItemCredit from './ListItemCredit'
import ListItemDebit from './ListItemDebit'

const ListGroup = () => {

    const dispatch = useDispatch()

    const { expense, TotalIncome, TotalExpense } = useSelector(state => state.expense)

    const handleDelete = (id) => {
        console.log("delete");
        dispatch(DeleteExp(id))
    }


    useEffect(() => {
        dispatch(TotalAmount())
    }, [expense])

    return (
        <div class="list-group-section" id='TRANSCTION'>

            <div class="credit-section list-section">

                <h1>TOTAL INCOME</h1>

                <ul>
                    {/* <ListItemCredit/> */}
                    {
                        expense.filter((credit => credit.Type === "credit")).map((creditmap) => (
                            <ListItemCredit key={creditmap.id} creditmap={creditmap} handleDelete={handleDelete} />
                        ))

                    }

                </ul>
                <span class="net-balance">
                    <h3>TOTAL INCOME :-</h3>
                    <h4>₹{TotalIncome}</h4>
                </span>




            </div>

            <div class="debit-section list-section">
                <h1>TOTAL EXPENSE</h1>
                <ul>
                    {
                        expense.filter((debit => debit.Type === "debit")).map((debitmap) => (
                            <ListItemDebit key={debitmap.id} debitmap={debitmap} handleDelete={handleDelete} />
                        ))

                    }


                </ul>
                <span class="net-expense">
                    <h3>TOTAL BALANCE :-</h3>
                    <h4>₹{TotalExpense}</h4>
                </span>
            </div>

        </div>
    )
}

export default ListGroup