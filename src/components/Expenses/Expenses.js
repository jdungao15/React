import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [filterYear, setFilteredYear] = useState('2021');
    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });


    return (<div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterYearHandler} selectedYear={filterYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>


    )
}

export default Expenses