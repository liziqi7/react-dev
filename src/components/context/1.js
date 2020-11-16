import React from 'react';
function ToolBar(props) {
    // Toolbar 组件接收一个额外的theme属性,然后传递给 ThemeButton 组件
    // 如果应用中每个单独的按钮都需要知道theme的值,这会是件很麻烦的事
    // 因为必须将这个值层层传递所有组件
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
}
class ThemeButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />;
    }
}
class Button extends React.Component {
    render() {
        return <button>{this.props.theme}</button>;
    }
}
class App extends React.Component {
    render() {
        return <ToolBar theme="dark" />;
    }
}
export default App;
