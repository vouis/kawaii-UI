import React, {useState} from 'react';
import Dialog from './Dialog'
import Button from "../button/Button";
const DialogExample:React.FunctionComponent = ()=>{
    const [visible,setVisible] = useState(false);
    const onCancel=()=>{
        setVisible(false)
    }
    return(<div>
        <Button onClick={()=>setVisible(true)} >dialog</Button>
        <Dialog visible={visible} onCancel={onCancel}>
        content
        </Dialog>
    </div>)
}

export default DialogExample;