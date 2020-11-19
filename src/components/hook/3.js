import React, { useReducer } from 'react';
const myReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
};
export default function () {
    const [state, dispatch] = useReducer(myReducer, { count: 0 });

    return (
        <>
            <div>useReducer</div>
            <p>count:{state.count}</p>
            <button onClick={() => dispatch({ type: 'add' })}>+1</button>
        </>
    );
}
