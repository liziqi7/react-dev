import React from 'react';
import { themes, ThemeContext } from './theme-toggler-context';
import ThemeTogglerButton from './theme-toggler-button';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        // State 包含了更新函数 因此会被 传递给 context provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }
    toggleTheme() {
        console.log('toggleTheme');
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark,
        }));
    }
    render() {
        // throw new Error('I crashed');
        // 整个 state 都被传递进 provider
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar />
                </ThemeContext.Provider>
            </div>
        );
    }
}
function Toolbar() {
    return (
        <React.Fragment>
            <ThemeTogglerButton />
        </React.Fragment>
    );
}

export default App;
