import React from 'react';
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
        };
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
        // 箭头函数
        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment,
        // }));
        // 普通函数
        this.setState((state, props) => {
            return {
                counter: state.counter + props.increment,
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
                <FormattedDate date={this.state.date} />
                <h3>counter:{this.state.counter}</h3>
            </div>
        );
    }
}
export default function () {
    return (
        <>
            <Clock increment={1} />
            <Clock increment={2} />
        </>
    );
}
