const getClasses = (prefixCls:string) =>{
    return  (name?:string)=>{
        return [prefixCls,name].filter(Boolean).join('-')
    }
}
export default getClasses;