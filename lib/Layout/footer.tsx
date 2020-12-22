import React from 'react';
import getClasses from "../util/getClasses";
const cn = getClasses('kawaii-layout')
interface Props extends React.HTMLProps<any> {

}

const Footer: React.FunctionComponent<Props> = (props) => {
    const {children} = props;

    return (<div className={cn('content')}>{children}</div>);
}

export default Footer;