import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpensesChart'

function Expenses(props) {
    const [year, setYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear)
    }

    const filterExpenseBasedONyear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })



    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filterExpenseBasedONyear} />
                {<ExpensesList items={filterExpenseBasedONyear} />}

            </Card>
        </div>
    )
}

export default Expenses