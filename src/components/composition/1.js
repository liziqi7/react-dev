import React from 'react';
function FancyBorder(props) {
    return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>;
}

function WelcomeDialog() {
    return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!"></Dialog>;
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
const Contacts = <div>Contacts</div>;
const Chat = <div>Chat</div>;

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ login: e.target.value });
    }
    handleSubmit(e) {
        console.log('login', this.state.login);
        e.preventDefault();
    }
    render() {
        return (
            <Dialog title="Mars Exporation Program" message="How should we refer to you?">
                <input type="text" value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Sign Me Up!</button>
            </Dialog>
        );
    }
}
export default function () {
    return (
        <div>
            <WelcomeDialog></WelcomeDialog>
            <SplitPane left={Contacts} right={Chat} />
            <SignUpDialog />
        </div>
    );
}
