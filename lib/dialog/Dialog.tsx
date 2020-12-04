import React,{Fragment} from 'react';
import Button from "../button/Button";
import Icon from "../icon";
import './dialog.scss';
import getClasses from "../util/getClasses";
interface Props extends React.ButtonHTMLAttributes<any>{
    visible:boolean
    onOk?:React.FunctionComponent
}

const classes = getClasses('kawaii-dialog');



const Dialog:React.FunctionComponent<Props> =(props)=>{
    const {visible,children,...restProps} = props;

    return (visible?
        <Fragment>
        <div className={classes('mask')}></div>
        <div className={classes()}>
            <div className={classes('close')}>
                <Icon name='close'></Icon>
            </div>
            <header className={classes('header')}></header>
            <main className={classes('main')}>{children}</main>
            <footer className={classes('footer')}><Button {...restProps}>OK</Button></footer>
            </div>
        </Fragment>
        :null)
}

export default  Dialog;
