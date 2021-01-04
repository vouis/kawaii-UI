import React ,{Fragment}from "react";
import './button.scss'
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{
        theme?:string;
}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {className,theme,children,...restProps} = props;
    const classes = getClasses('kawaii-button',className);
    console.log(props);
    return(
        <Fragment>
        <span {...restProps} className={theme?classes(theme):classes('2077')}>
            {children}
        </span>
            <span children={children} className={theme?classes(theme+'2077-glitch'):classes('2077-glitch')}/>
            </Fragment>
            )
}
export default Button;