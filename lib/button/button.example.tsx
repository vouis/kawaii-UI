import React from "react";
import Button from "./Button";
interface Props {

}
const ButtonExample:React.FunctionComponent<Props>=()=>{
    return (
        <div>
            <Button theme={'2077'} onClick={()=>console.log('click')}>2077</Button>
        </div>

    );

}
export default ButtonExample;