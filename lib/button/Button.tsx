import React from "react";
import './button.scss'
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{

}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {...restProps} = props;
    const classes = getClasses('kawaii-button');
    return(<span {...restProps} className={classes('wrapper')}/>)
}
export default Button;