import React from 'react';
import './1.css';
import 'chosen-js';
class Chosen extends React.Component {
    componentDidMount() {
        // console.log(window.$, window.jQuery);
        // debugger;
        this.$el = window.jQuery(this.el);
        this.$el.chosen();
        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger('chosen:updated');
        }
    }
    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destory');
    }
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div>
                <select className="Chosen-select" ref={el => (this.el = el)}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}

export default function () {
    return (
        <>
            <div>jquery</div>
            <Chosen onChange={value => console.log(value)}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </Chosen>
        </>
    );
}
