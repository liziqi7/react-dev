import React from 'react';
// 组件名称必须大写
function Welcome(props) {
    return <h1>Hello,{props.name}</h1>;
}
// 等价于
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>;
    }
}
const user = {
    name: 'Sara1',
};
export default function () {
    return (
        <>
            <Welcome name="Sara" />
            {Welcome(user)}
            <Welcome2 name="Sara2" />
        </>
    );
}
