import React from 'react';
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.check = React.createRef();
    }
    handleSubmit(e) {
        console.log('name:', this.input.current.value);
        console.log('check:', this.check.current.checked);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input placeholder="Bob" defaultValue="Jack" type="text" ref={this.input} />
                </label>
                <label>
                    Checked:
                    <input type="checkbox" defaultChecked={true} name="isGoing" ref={this.check} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}
