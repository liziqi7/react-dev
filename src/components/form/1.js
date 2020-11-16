import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', text: '请撰写一篇文章', select: ['coconut'], isGoing: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let { name, type, value } = event.target;
        if (type === 'select-multiple') {
            let cacheMultiple = this.state[name];
            let idx = cacheMultiple.indexOf(value);
            if (idx === -1) {
                cacheMultiple.push(value);
            } else {
                cacheMultiple.splice(idx, 1);
            }
            value = cacheMultiple;
        } else if (type === 'checkbox') {
            value = event.target.checked;
        }
        this.setState(state => {
            return { [name]: value };
        });
        console.log(name, value);
    }
    handleSubmit(event) {
        console.log('提交的名字:', this.state.name);
        console.log('提交的文章:', this.state.text);
        console.log('提交的风味:', this.state.select);
        console.log('提交的参与:', this.state.isGoing);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input placeholder="Bob" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    文章:
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    选择你喜欢的风味:
                    <select value={this.state.select} multiple={true} onChange={this.handleChange} name="select">
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <br />
                <label>
                    参与:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
export default function () {
    return (
        <div>
            <NameForm />
        </div>
    );
}
