import React from "react";
import './button.scss'
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{
        theme?:string;
}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {className,theme,...restProps} = props;
    const cn = getClasses('kawaii-button',className);
    console.log(props);
    return(
        <span {...restProps} content-tooltip={props.children} className={theme?cn(theme):cn('2077')}/>
            )
}
export default Button;