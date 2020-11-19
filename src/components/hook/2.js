import React from 'react';
import Navigator from './Navigator';
import Message from './Message';
import AppContext from './AppContext';
export default function () {
    return (
        <>
            <div>useContext</div>
            <AppContext.Provider
                value={{
                    username: 'jack',
                }}
            >
                <Navigator />
                <Message />
            </AppContext.Provider>
        </>
    );
}
