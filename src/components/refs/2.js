import React, { Component } from 'react';
import FancyButton from './FancyButton';
export default class Refs2 extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        // console.log(this.ref);
        this.ref.current.focus();
    }
    render() {
        return (
            <>
                <div>Refs2</div>
                <FancyButton label="Click Me" ref={this.ref} />
            </>
        );
    }
}
