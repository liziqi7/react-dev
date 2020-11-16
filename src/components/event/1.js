import React from 'react';
function activateLasers() {
    console.log('click');
}
function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

export default function () {
    return (
        <>
            <button onClick={activateLasers}>Activate Laser</button>
            <br />
            <a href="/#" onClick={handleClick}>
                Click me
            </a>
        </>
    );
}
