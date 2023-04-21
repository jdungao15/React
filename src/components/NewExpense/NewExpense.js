import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        showForm(false);
        props.onAddExpense(expenseData);
    };

    const showFormHandler = () => {
        setShowForm(true);
    };

    const onCancelHandler = () => {
        setShowForm(false);
    }
    return <div className="new-expense">
        {!showForm &&
            <button onClick={showFormHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}

    </div>;
};

export default NewExpense;