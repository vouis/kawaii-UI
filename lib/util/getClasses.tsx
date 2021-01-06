const getClasses = (prefixCls:string) =>{
    return  (name:string[]|string,className?:string|undefined)=>{

        const classArray = typeof name!=='string'?
            (name as string[])
                .map((item)=>{
                   return [prefixCls,item].filter(Boolean).join('-');
            }):
            [[prefixCls,name].filter(Boolean).join('-')];
        const finalArray = className?classArray.concat([(className as string)]):classArray;

        return finalArray.filter(Boolean).join(' ');
    }
}
export default getClasses;