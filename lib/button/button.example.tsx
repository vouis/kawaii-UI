import React from "react";
import Button from "./Button";
interface Props {

}
const ButtonExample:React.FunctionComponent<Props>=()=>{
    return (<Button onClick={()=>console.log('click')} >button</Button>);

}
export default ButtonExample;