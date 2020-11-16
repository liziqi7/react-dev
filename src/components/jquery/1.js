import React from 'react';

// import 'chosen-js';
class Chosen extends React.Component {
    componentDidMount() {
        // debugger;
        this.$el = window.$(this.el);
        // this.$el.chosen();
    }
    render() {
        return (
            <div>
                <select ref={el => (this.el = el)}>{this.props.children}</select>
            </div>
        );
    }
}

export default function () {
    return (
        <>
            <div>jquery</div>
            <Chosen onChange={value => console.log(value)}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </Chosen>
        </>
    );
}
