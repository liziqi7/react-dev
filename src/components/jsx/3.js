import React, { Profiler } from 'react';

const MyComponents = {
    DataPicker: function (props) {
        return <div>color is {props.color}</div>;
    },
};
function Hello(props) {
    return <div>Hello {props.toWhat}</div>;
}
function Photo(props) {
    return <div>Photo {props.story}</div>;
}
function Video(props) {
    return <div>Video {props.story}</div>;
}
const componets = {
    photo: Photo,
    video: Video,
};
const Add = function (props) {
    return <div>Add:{props.foo}</div>;
};
function Story(props) {
    const SpecificStory = componets[props.storyType];
    return <SpecificStory story={props.story} />;
}
function NumberDescriber(props) {
    let description = '';
    if (props.number % 2 === 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return (
        <div>
            {props.number} is an {description} number
        </div>
    );
}
function MyComponent(props) {
    return <div>{props.message}</div>;
}
function MyTextBox(props) {
    return <div>autocomplete is {String(props.autocomplete)}</div>;
}
function Item(props) {
    return <li>{props.message}</li>;
}
function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message, key) => (
                <Item key={key} message={message} />
            ))}
        </ul>
    );
}
// 函数作为子元素
function Repeat(props) {
    const items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}
function ListOfTenThings() {
    return <Repeat numTimes={10}>{index => <div key={index}>this is item {index} in the list</div>}</Repeat>;
}
function Boo() {
    return (
        <div>
            Boo
            <div />
            <div></div>
            <div>{false}</div>
            <div>{null}</div>
            <div>{String(undefined)}</div>
            <div>{true}</div>
        </div>
    );
}
/**
 * id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
 */
function callback() {
    // console.log(arguments);
}
export default function () {
    return (
        <>
            <div>jsx3</div>
            <Profiler id="jsx3" onRender={callback}>
                <MyComponents.DataPicker color="blue" />
                <Hello toWhat="world" />
                <Story storyType="video" story="url" />
                <Add foo={1 + 2 + 3 + 4} />
                <NumberDescriber number={8} />
                <MyComponent message="&nbsp;hello world" />
                <MyComponent message={'hello world'} />
                <MyComponent message="&lt;3" />
                <MyComponent message={'<3'} />
                <MyTextBox autocomplete />
                <MyTextBox autocomplete={true} />
                <TodoList />
                <ListOfTenThings />
                <Boo />
            </Profiler>
        </>
    );
}
