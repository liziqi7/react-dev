import React from 'react';
import cat from '../../asset/cat.jpeg';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    componentDidMount() {}
    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }
    render() {
        return (
            <div style={{ height: '20vh', position: 'relative' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
                <p>
                    当前鼠标位置是{this.state.x},{this.state.y}
                </p>
            </div>
        );
    }
}
class Cat extends React.Component {
    componentDidMount() {
        // console.log(this.props.hello);
    }
    render() {
        const { mouse } = this.props;

        return <img alt="cat" src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
    }
}
// function withMouse(Component) {
//     return class extends React.Component {
//         render() {
//             return <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />;
//         }
//     };
// }
function withMouse(WrapperComponent) {
    return class extends React.Component {
        render() {
            return <Mouse render={mouse => <WrapperComponent {...this.props} mouse={mouse} />} />;
        }
    };
}

class MouseTracker extends React.Component {
    render() {
        const WithMouse = withMouse(Cat);
        return (
            <div>
                <h1>移动鼠标</h1>
                {/* <Mouse render={mouse => <Cat mouse={mouse} />} /> */}
                <WithMouse hello={'world'} />
            </div>
        );
    }
}

export default function () {
    return (
        <>
            <div>render props</div>
            <MouseTracker />
        </>
    );
}
