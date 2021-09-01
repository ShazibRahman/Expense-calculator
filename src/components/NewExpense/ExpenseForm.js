import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {


    // eslint-disable-next-line
    const [userInput, setUserInput] = useState({
        title: '',
        amount: "",
        date: ''
    });


    const titleChangeHandler = (event) => {

        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }

        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })

    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }

        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        for (let keys in userInput) {
            if (userInput[keys].trim().length === 0) return alert(`${keys} required`)

        }
        let amount = parseFloat(userInput.amount)
        if (isNaN(amount)) return alert(`Amount Entered  **${userInput.amount}**  is not a valid float number`)

        const expenseData = {
            ...userInput,
            amount,
            date: new Date(userInput.date)
        };
        props.onSaveExpanseData(expenseData)
        setUserInput({
            title: '',
            amount: "",
            date: ''
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='float' value={userInput.amount} min='1' step='1' onChange={amountChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}> Cancel </button>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )

}


export default ExpenseForm;