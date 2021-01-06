import React from 'react';
import getClasses from "../util/getClasses";

interface Props extends React.HTMLAttributes<any> {

}

const Main: React.FunctionComponent<Props> = (props) => {
    const {className,children,...restProps} = props;
    const cn = getClasses('kawaii-layout');

    return (<div className={cn('main',className)} {...restProps}>{children}</div>);
}

export default Main;