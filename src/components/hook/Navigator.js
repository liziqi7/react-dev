import React, { useContext } from 'react';
import AppContext from './AppContext';
export default function () {
    const { username } = useContext(AppContext);
    return (
        <>
            <div>Navigator is {username}</div>
        </>
    );
}
