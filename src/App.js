import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 287.54, date: new Date(2021, 6, 15) },
    { id: 'e2', title: 'New PC', amount: 587.96, date: new Date(2021, 7, 8) },
    { id: 'e3', title: 'New Desk', amount: 97.65, date: new Date(2021, 7, 25) },
    { id: 'e4', title: 'New Washing Machine', amount: 324.73, date: new Date(2021, 8, 5) },
  ];
  return (
    <div className="App">
      <h2>Main Menu</h2>
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
