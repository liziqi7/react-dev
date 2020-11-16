import React from 'react';
import { ThemeContext } from './theme-context';

class ThemeButton extends React.Component {
    render() {
        const props = this.props;
        const theme = this.context;
        // console.log(theme);
        return (
            <div>
                <button {...props} style={{ backgroundColor: theme.background }} />
            </div>
        );
    }
}
ThemeButton.contextType = ThemeContext;
export default ThemeButton;
