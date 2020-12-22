import React from 'react';
import getClasses from "../util/getClasses";
import './layout.scss'
const cn = getClasses('kawaii-layout')

interface Props extends React.HTMLProps<any> {

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {children} = props;
    return (<div className={cn('')}>{children}</div>);
}

export default Layout;