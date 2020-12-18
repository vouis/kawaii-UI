const getClasses = (prefixCls:string,className?:string|undefined) =>{
    return  (name?:string)=>{
        const classString = [prefixCls,name].filter(Boolean).join('-');
        return [classString,className].filter(Boolean).join(' ');
    }
}
export default getClasses;