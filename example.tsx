import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from'./lib/icon/icon.example'


// @ts-ignore
ReactDOM.render(
    <Router>
    <div className='wrapper'>
        <aside>
            <h2>组件</h2>
            <ul>
                <li>
                    <Link to='/icon'>Icon</Link>
                </li>
            </ul>
        </aside>
        <main>
            <Route path='/icon' component={IconExample}></Route>
        </main>
    </div>
    </Router>
    , document.querySelector('#root'));