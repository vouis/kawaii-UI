import * as React from 'react';
import './importAllIcons'
import './index.scss'
import getClasses from "../util/getClasses";
interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{
    const cn = getClasses('kawaii-icon');
const {className,name,...restProps} = props
    return (
        <div >
            <svg className={cn('kawaii-icon',className)} {...restProps}>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </div>
    );

}
export default Icon;