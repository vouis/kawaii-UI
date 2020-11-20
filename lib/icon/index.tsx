import * as React from 'react';
import '../../assets/images/planet.svg';
// import planet from '../../assets/images/planet.svg';
// import planet from '@assets/images/planet.svg';
import './importAllIcons'
interface IconProps{
    name:String;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{

    return (
        <div>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </div>
    );

}
export default Icon;