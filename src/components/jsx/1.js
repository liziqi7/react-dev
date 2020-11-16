import React from 'react';

const user = {
    firstName: 'Jack',
    lastName: 'Rose',
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const element = <h1>Hello,{formatName(user)}</h1>;

export default element;
