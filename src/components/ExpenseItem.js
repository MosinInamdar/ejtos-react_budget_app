import React, { useContext } from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDeleteOutline } from 'react-icons/md'; // Import new icons
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button
                    onClick={event => increaseAllocation(props.name)}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    <MdAddCircleOutline size='1.5em' color='green' />
                </button>
            </td>
            <td>
                <button
                    onClick={event => decreaseAllocation(props.name)}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    <MdRemoveCircleOutline size='1.5em' color='red' />
                </button>
            </td>
            <td>
                <MdDeleteOutline
                    size='1.5em'
                    color='grey'
                    style={{ cursor: 'pointer' }}
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;
