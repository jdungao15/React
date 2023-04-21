import ExpenseItem from './ExpenseItem'
import './ExpensesItemList.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";


function ExpenseItemList(props) {
    const [filterYear, setFilteredYear] = useState('2021');
    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = <p>No Expenses found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />));
    }
    return (<div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterYearHandler} selectedYear={filterYear}/>
                {expensesContent}
            </Card>
        </div>


    )
}

export default ExpenseItemList