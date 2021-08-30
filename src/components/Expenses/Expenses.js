import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {
    // console.log(props.items);
    const [year, setYear] = useState('2020')
    const items = props.items
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear)


    }

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />

                <ExpenseItem
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                />
                <ExpenseItem
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                />
                <ExpenseItem
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date}
                />
                <ExpenseItem
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses