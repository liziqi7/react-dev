import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

function useFriendState(id) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function check() {
            setTimeout(() => {
                let isState = true;
                if (id === 1) {
                    isState = false;
                }
                setIsOnline(isState);
            }, 1000);
        }
        check();
    });
    return isOnline;
}
function usePrevious(value) {
    // console.log(useRef());
    const ref = useRef();
    // const ref = {
    //     current: 0,
    // };
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
const Example = () => {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(() => {
        let num = -1;
        // 异步不行
        // setTimeout(() => {
        //     num = 0;
        // }, 1000);
        return num;
    });
    const isOnline = useFriendState(count);
    const prevCount = usePrevious(count);
    // console.log('Example');
    // 没有第二个参数 相当于 componentDidMount 和 componentDidUpdate:
    // 第二个参数为[] 相当于 componentDidMount  只执行一次
    // 第二个参数有值 则表示仅在count更新时,才会执行
    // console.log()
    useEffect(() => {
        console.log('useEffect');
        // 使用浏览器的 API 更新页面标题
        document.title = `react use effect count:${count},${String(isOnline)}`;
        return () => {
            console.log('clean useEffect');
        };
    }, [count, isOnline]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, []);
    return (
        <>
            <div>
                count: {count},{String(isOnline)},prev count {prevCount}
            </div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+1</button>
        </>
    );
};
export default function () {
    return (
        <>
            <div>Hook1</div>
            <Example />
        </>
    );
}
