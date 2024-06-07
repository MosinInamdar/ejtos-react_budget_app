import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        if (updatedBudget > 20000) {
            alert("Budget can't exceed 20000");
        } else if (updatedBudget < totalExpenses) {
            alert("Budget can't be lower than total spending");
        } else {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                />
            </span>
        </div>
    );
};

export default Budget;
