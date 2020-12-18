import React from "react";
import './button.scss'
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{

}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {className,...restProps} = props;
    const classes = getClasses('kawaii-button',className);
    return(<span {...restProps} className={classes('wrapper')}/>)
}
export default Button;