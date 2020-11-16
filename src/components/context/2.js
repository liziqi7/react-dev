import React from 'react';
// Context 可以让我们无需明确地传遍每一个组件,就能将值深入传递给组件树
// 为当前的 theme 创建一个 context (light为默认值)
const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyDisplayName';
class App extends React.Component {
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树
        // 无论多深,任何组件都能读取这个值
        // 在这个例子中,我们将'dark'作为当前的值传递下去
        return (
            <ThemeContext.Provider value="drak">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}
// 中间的组件再也不必指明往下传递 theme 了
function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}
class ThemeButton extends React.Component {
    // static contextType = ThemeContext;
    render() {
        return <Button />;
    }
}
class Button extends React.Component {
    // 指定 contextType 读取当前的 theme context
    // React 会往上找最近的 theme Provider,然后使用其值
    // 在这个例子中,最近的值为'dark'
    static contextType = ThemeContext;
    // 相当于
    // Button.contextType = ThemeContext;
    render() {
        return <button>{this.context}</button>;
    }
}

export default App;
