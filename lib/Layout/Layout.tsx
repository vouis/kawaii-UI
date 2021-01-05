import React, {ReactElement} from 'react';
import getClasses from "../util/getClasses";
import './layout.scss'
import Sider from "./sider";


interface Props extends React.HTMLAttributes<HTMLElement> {
    children:Array<ReactElement> |ReactElement;
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,...restProps} = props;
    const children = props.children as Array<ReactElement>;
    const cn = getClasses('kawaii-layout',className);
    const CN = children.length&&
        children.reduce((result,node)=>{
            if(node.type===Sider){
                return 'has-sider';
            }
            return result;
        },'');
console.log( children.length,CN,children)


    return (<div className={cn(CN as string)} {...restProps} >{children}</div>);
}

export default Layout;