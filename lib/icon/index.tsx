import * as React from 'react';
import './importAllIcons'
import './index.scss'
interface IconProps{
    name:String;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{

    return (
        <div >
            <svg className='kawaii_icon'>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </div>
    );

}
export default Icon;