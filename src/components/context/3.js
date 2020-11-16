import React from 'react';
import { themes, ThemeContext } from './theme-context';
import ThemeButton from './theme-button';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = {
            theme: themes.light,
        };
    }
    toggleTheme() {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark,
        }));
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar toggleTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemeButton>Default</ThemeButton>
            </div>
        );
    }
}
function Toolbar(props) {
    return (
        <div>
            <ThemeButton onClick={props.toggleTheme}>Change Theme</ThemeButton>
        </div>
    );
}

export default App;
