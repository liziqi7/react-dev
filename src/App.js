import React from 'react';
import jQuery from 'jquery';

// import logo from './logo.svg';
import './App.css';
import Jsx1 from './components/jsx/1.js';
import Jsx2 from './components/jsx/2.js';
import Ele1 from './components/element/1.js';
import Pro1 from './components/props/1.js';
import Pro2 from './components/props/2.js';
import Pro3 from './components/props/3.js';
import Sta1 from './components/state/1.js';
import Eve1 from './components/event/1.js';
import Eve2 from './components/event/2.js';
import If1 from './components/if/1.js';
import List1 from './components/list/1.js';
import Form1 from './components/form/1.js';
import Form2 from './components/form/2.js';
import Sup1 from './components/stateup/1.js';
import Cpt1 from './components/composition/1.js';
import Tk1 from './components/thinking/1.js';
import Ctx1 from './components/context/1.js';
import Ctx2 from './components/context/2.js';
import Ctx3 from './components/context/3.js';
import Ctx4 from './components/context/4.js';

import Refs1 from './components/refs/1.js';

import Refs2 from './components/refs/2.js';

import Jqy1 from './components/jquery/1.js';

window.$ = jQuery;
window.jQuery = jQuery;
// console.log(jQuery);
// const element = <h1>Hello, world!</h1>;
// console.log(element());
function App() {
    return (
        <div className="App">
            <Jqy1 />
            <Refs1 />
            <Refs2 />
            {Jsx1}
            {/* <Jsx1 /> */}
            <Jsx2 />
            <Ele1 />
            <Pro1 />
            <Pro2 />
            <Pro3 />
            <Sta1 />
            <Eve1 />
            <Eve2 />
            <If1 />
            <List1 />
            <Form1 />
            <Form2 />
            <Sup1 />
            <Cpt1 />
            <Tk1 />
            <Ctx1 />
            <Ctx2 />
            <Ctx3 />
            <Ctx4 />
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
