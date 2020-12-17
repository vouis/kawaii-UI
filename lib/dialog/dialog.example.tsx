import React, {useState} from 'react';
import Dialog from './Dialog'
import Button from "../button/Button";
const DialogExample:React.FunctionComponent = ()=>{
    const [visible,setVisible] = useState(false);
    const onClick=()=>{
        setVisible(false)
    }
    return(<div>
        <Button onClick={()=>setVisible(true)}>dialog</Button>
        <Dialog visible={visible} onClick={onClick}>
        content
        </Dialog>
    </div>)
}

export default DialogExample;