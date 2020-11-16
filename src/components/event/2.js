import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: true,
        };
        // 为了在回调中使用this, 这个绑定是必须的
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // this.setState({ isToggled: !this.state.isToggled });
        this.setState(state => ({
            isToggled: !state.isToggled,
        }));
    }
    render() {
        return <button onClick={this.handleClick}>{this.state.isToggled ? 'ON' : 'OFF'}</button>;
    }
}
class LoggingButton extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
        };
    }
    // 此语法确保 handleClick 内的 this 已被绑定
    handleClick = () => {
        console.log('this is:', this);
    };
    handleClick2() {
        console.log('this is:', this);
    }
    deleteRow(id, e) {
        console.log('Delete Row:', id, e);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <br />
                <br />
                {/* 此语法确保 handleClick2 内的this 已被绑定 */}
                <button onClick={() => this.handleClick2()}>Click me2</button>
                <br />
                <br />
                <button onClick={e => this.deleteRow(this.state.id, e)}>Delete Row</button>
                <button onClick={this.deleteRow.bind(this, this.state.id)}>Delete Row2</button>
            </div>
        );
    }
}
export default function () {
    return (
        <div>
            <Toggle />
            <LoggingButton />
        </div>
    );
}
