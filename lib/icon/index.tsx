import * as React from 'react';
import './importAllIcons'
import './index.scss'
import classes from './utils/classes';
interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{
const {className,name,...restProps} = props
    return (
        <div >
            <svg className={classes('kawaii-icon',className)} {...restProps}>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </div>
    );

}
export default Icon;