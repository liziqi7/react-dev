import React from 'react';
import { ThemeContext } from './theme-toggler-context';
function ThemeTogglerButton() {
    // Theme Toggler 按钮不仅可以获取 theme值 它也从 context 中获取到一个 toggleTheme 函数
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                // console.log(toggleTheme);
                <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}
export default ThemeTogglerButton;
