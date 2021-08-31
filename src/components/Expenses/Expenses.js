import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

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

                {filterExpenseBasedONyear.map((item) => (

                    < ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}

            </Card>
        </div>
    )
}

export default Expenses