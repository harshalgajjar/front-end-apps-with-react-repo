import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (value) => {
        const currency = {
            value: value,
        };

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })

    }

    return (
        <div className='alert alert-secondary'>
            <span>Currency
                <select
                    value = {currency}
                    onChange={(event) => changeCurrency(event.target.value)}
                    name="currency"
                    id="currency">
                    <option value={"$"}>$ Dollar</option>
                    <option value={"£"}>£ Pound</option>
                    <option value={"€"}>€ Euro</option>
                    <option value={"₹"}>₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};
export default Currency;