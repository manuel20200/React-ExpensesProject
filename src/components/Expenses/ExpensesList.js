import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    // {filteredExpenses.length > 0 && <p>No Expenses Found!</p>} 

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (<ul className="expenses-list">
                {props.items.map((expenseFiltered, index) => 
                    (<ExpenseItem 
                        key={expenseFiltered.id}
                        title={expenseFiltered.title} 
                        amount={expenseFiltered.amount} 
                        date={expenseFiltered.date} />
                    ))}
            </ul>);

}

export default ExpensesList;