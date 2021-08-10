import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    /* const [title, setTitle] = useState(props.title);
    let i = 0;
    const clickHandler = () => {
        console.log('CLicked ' + i +'!!');
        setTitle('Updated!!');  // This render again jsx code with the value updated.
        console.log(title);
        i++;
    }; */

    return  (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;