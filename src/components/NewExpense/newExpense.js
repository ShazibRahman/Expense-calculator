import { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            amount: Number(enteredExpenseData.amount),

            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)

    }



    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpanseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}

        </div>
    )

};



export default NewExpense