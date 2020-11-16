import React from 'react';

function tick() {
    const element = (
        <div>
            <h1>Hello , World!</h1>
            <h2>It is {new Date().toLocaleString()}</h2>
        </div>
    );
    return element;
}
export default tick;
