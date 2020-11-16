import React, { Component } from 'react';
// 创建一个高阶组件
// 参数化容器组件

function logProps(WrappedComponent) {
    class LogProps extends Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
        render() {
            const { forwordedRef, ...rest } = this.props;
            // 将自定义的 prop 属性 forwardedRef 定义为 ref
            return <WrappedComponent ref={forwordedRef} {...rest} />;
        }
    }
    const name = WrappedComponent.displayName || WrappedComponent.name;
    LogProps.displayName = `LogProps(${name})`;
    // console.log(LogProps.displayName);
    // return LogProps;
    // 注意 将ref作为常规prop属性forwordedRef传递给 LogProps
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上
    return React.forwardRef((props, ref) => {
        return <LogProps forwordedRef={ref} {...props} />;
    });
}

class FancyButton extends Component {
    focus() {
        // 聚焦
        // console.log('FancyButton focus');
    }
    render() {
        return <button>{this.props.label}</button>;
    }
}

export default logProps(FancyButton);
