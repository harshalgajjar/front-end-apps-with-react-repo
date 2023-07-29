import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        if (props.cost - 10 >= 0) {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });
        } else {
            window.alert("Allocation cannot be negative.")
        }

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button style={{border: "None", backgroundColor: "rgba(0,0,0,0)"}} onClick={event => increaseAllocation(props.name)}><img style={{width: 25}} src="increase.png" /></button></td>
            <td><button style={{border: "None", backgroundColor: "rgba(0,0,0,0)"}} onClick={event => decreaseAllocation(props.name)}><img style={{width: 25}} src="decrease.png" /></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;