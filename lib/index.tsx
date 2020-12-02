import * as React from 'react';
import { render } from 'react-dom'
import Icon from './icon'
const fn :React.MouseEventHandler = (e) =>{
    console.log(e.target)
    // console.log((e.target as SVGUseElement).style)
}
render(
    <Icon name='planet'  onMouseEnter={fn}/>,document.getElementById('root'),
)