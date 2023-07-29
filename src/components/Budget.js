import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (value) => {
        const budget = {
            value: value,
        };

        if (value > 20000) {
            window.alert("The value cannot exceed 20,000");
        } else if(value < totalExpenses){
            window.alert("You cannot reduce the budget value lower than the spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
        }

    }

    return (
        <div className='alert alert-secondary' >
            <span 
                    style={{ size: 10 }}>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budget}
                    style={{width: '5.5em'}}
                    onChange={(event) => changeBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;