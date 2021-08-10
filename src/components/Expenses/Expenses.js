import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setEnteredYearFilter] = useState('2021');

    const filterYearHandler = (selectedYear) => {
        setEnteredYearFilter(selectedYear);
        console.log(filteredYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterYearData={filterYearHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
        
    );
}

export default Expenses;