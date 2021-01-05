import React from 'react';
import getClasses from "../util/getClasses";
import './layout.scss'


interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,children,...restProps} = props;
    const cn = getClasses('kawaii-layout',className);
    return (<div className={cn('')} {...restProps} >{children}</div>);
}

export default Layout;