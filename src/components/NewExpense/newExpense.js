import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            amount: Number(enteredExpenseData.amount),

            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            < ExpenseForm onSaveExpanseData={saveExpenseDataHandler} />

        </div>
    )

};



export default NewExpense