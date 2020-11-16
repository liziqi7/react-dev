import React from 'react';

const user = {
    firstName: 'Jack',
    lastName: 'Rose',
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const element = <h1>Hello,{formatName(user)}</h1>;
function getGreeting(user) {
    if (user) {
        return <h1>Hello,{formatName(user)}</h1>;
    }
    return <h1>Hello,Strange</h1>;
}
export default function () {
    // return <>{element}</>;
    return <>{getGreeting()}</>;
}
