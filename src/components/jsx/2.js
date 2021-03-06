// import { func } from 'prop-types';
import React from 'react';

const user = {
    firstName: 'Jack',
    lastName: 'Rose',
    idx: 1,
    pre: '<script>console.log(1)</script>',
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const e2 = (
    <div>
        <h1>Hello,Strange</h1>
        <h2>Good to see you here.</h2>
    </div>
);
function createMarkup() {
    return {
        __html: user.pre,
    };
}
function getGreeting(user) {
    if (user) {
        return (
            <div>
                <h1>Hello,{formatName(user)}</h1>
                <p data-idx={user.idx}>idx:{user.idx}</p>
                <div>{user.pre}</div>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
        );
    }
    return e2;
}
export default function () {
    return (
        <>
            {getGreeting(user)}
            <p>------</p>
            {e2}
        </>
    );
}
