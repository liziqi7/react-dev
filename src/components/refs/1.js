import React from 'react';

function FancyButton(props) {
    return <button className="FancyButton">{props.children}</button>;
}
// 注意第二个参数ref 只在使用React.forwardRef定义组件时存在.
// 常规函数和class组件不接受ref参数,且props中也不存在ref
const FancyButton2 = React.forwardRef((props, ref) => {
    // console.log(props);
    return (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    );
});
export default class Refs1 extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个方式 允许访问创建的React元素
        this.ref = React.createRef();
    }
    render() {
        return (
            <div>
                <FancyButton>click it</FancyButton>
                <FancyButton2 ref={this.ref}>click it2</FancyButton2>
            </div>
        );
    }
}
