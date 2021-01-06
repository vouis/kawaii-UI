import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
import Button from "../button/Button";
import Icon from "../icon";
import './dialog.scss';
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{
    visible:boolean
    onOk?:React.EventHandler<any>
    onCancel?:React.EventHandler<any>
    /** 点击蒙层是否允许关闭 */
    maskClosable?:boolean;
    /** 是否显示右上角的关闭按钮 */
    closable?: boolean;
}

const classes = getClasses('kawaii-dialog');



const Dialog:React.FunctionComponent<Props> =(props)=>{
    const {className,visible,children,onCancel,maskClosable,...restProps} = props;
    const dialogChild = (visible?
        <Fragment>
            <div className={classes('mask')} onClick={maskClosable||maskClosable!==false?onCancel:()=>{}}/>
            <div className={classes('',className)}>
                <Icon name='close' className={classes('close') } onClick={onCancel}/>
                <header className={classes('header')}>{'header'}</header>
                <main className={classes('main')}>{children}</main>
                <footer className={classes('footer')}>
                    <Button className={classes('footer-cancel') } onClick={onCancel} {...restProps}>Cancel</Button>
                    <Button {...restProps}>OK</Button></footer>
            </div>
        </Fragment>
        :null);

    return ReactDOM.createPortal(dialogChild, document.body);
}

export default  Dialog;
