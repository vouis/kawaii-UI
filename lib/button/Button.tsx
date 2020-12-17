import React from "react";
import './button.scss'
interface Props extends React.ButtonHTMLAttributes<any>{

}
const Button:React.FunctionComponent<Props>=(props)=>{
    const {...restProps} = props;
    return(<button {...restProps}></button>)
}
export default Button;