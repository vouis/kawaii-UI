import React from "react";
import './button.scss'
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{
        theme?:string;
}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {className,theme,...restProps} = props;
    const classes = getClasses('kawaii-button',className);
    console.log(props);
    return(

        <span {...restProps} className={theme?classes(theme):classes('2077')}/>


            )
}
export default Button;