import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_STATE = [
  { id: 'e1', title: 'Car Insurance', amount: 287.54, date: new Date(2020, 6, 15) },
  { id: 'e2', title: 'New PC', amount: 587.96, date: new Date(2021, 7, 8) },
  { id: 'e3', title: 'New Desk', amount: 97.65, date: new Date(2021, 7, 25) },
  { id: 'e4', title: 'New Washing Machine', amount: 324.73, date: new Date(2019, 8, 5) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <h2>Main Menu</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

  // Option without using JSX, only using pure React
  /* return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, 'Main Menu'), 
    React.createElement(Expenses, {data: expenses})
  ); */
}

export default App;
