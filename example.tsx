import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from'./lib/icon/icon.example'
import DialogExample from'./lib/dialog/dialog.example'
import ButtonExample from'./lib/button/button.example'
import LayoutExample from'./lib/layout/layout.example'

// @ts-ignore
ReactDOM.render(
    <Router>
    <div className='wrapper'>
        <aside>
            <h2>组件</h2>
            <ul>
                <li>
                    <NavLink to='/icon'>Icon</NavLink>
                </li>
                <li>
                    <NavLink to='/dialog'>dialog</NavLink>
                </li>
                <li>
                    <NavLink to='/button'>button</NavLink>
                </li>
                <li>
                    <NavLink to='/layout'>layout</NavLink>
                </li>
            </ul>
        </aside>
        <main>
            <Route path='/icon' component={IconExample}></Route>
            <Route path='/dialog' component={DialogExample}></Route>
            <Route path='/button' component={ButtonExample}></Route>
            <Route path='/layout' component={LayoutExample}></Route>
        </main>
    </div>
    </Router>
    , document.querySelector('#root'));