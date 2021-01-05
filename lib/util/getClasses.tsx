const getClasses = (prefixCls:string,className?:string|undefined,className2?:string|undefined) =>{
    return  (name?:string)=>{
        const classString = [prefixCls,name].filter(Boolean).join('-');
        return [classString,className,className2].filter(Boolean).join(' ');
    }
}
export default getClasses;