import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetExpense } from '../feature/ExpenseSlice/expenseSlice'

const FormSection = () => {

    const dispatch = useDispatch()

    const [Form , setForm] = useState({
      id: crypto.randomUUID(),
      Transction: "",
      Amount: "",
      Type: ""
    })

    const { Transction , Amount , Type } = Form

    const handlChange =(e)=>{
        setForm({
            ...Form,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = (e)=>{
     
        e.preventDefault();
        dispatch(SetExpense(Form))
        setForm({
            Transction: "",
            Amount: "",
            Type: ""
        })
    }

    // console.log(Form);

    return (
        <form class="form-section"  onSubmit={handleSubmit}>
            <h3>ADD YOUR TRANSCTION HERE..</h3>
            <div class="input-section">


                <div class="input-container">
                    <input type="text"
                     name="Transction" 
                     value={Transction}
                     onChange={handlChange}
                    class="input" 
                    placeholder="Enter Your Transction Name"
                    autocomplete="off" required
                    
                        />
                    <div class="highlight"></div>
                </div>


                <div class="input-container">
                    <input type="number" 
                    name="Amount"
                    value={Amount}
                    onChange={handlChange}
                     class="input" placeholder="Enter Amount" autocomplete="off"
                        required />
                    <div class="highlight"></div>
                </div>

                <select required 
                    name="Type"
                    value={Type}
                    onChange={handlChange}>
                    <option aria-required class="option" value="0">--Select Transction Type--</option>

                    <option aria-required class="option" value="credit">CREDIT</option>
                    <option aria-required class="option" value="debit">DEBIT</option>
                </select>

            </div>

            <button class="btn-submit"> SUBMIT
            </button>

        </form>
    )
}

export default FormSection