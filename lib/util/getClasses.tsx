

const getClasses = (prefixCls:string) =>{
    return  (name:string[]|string,className?:string|undefined)=>{
        let classArray;
        let finalArray;
        if(typeof name!=='string'){
            classArray = (name as string[]).map((item)=>{
                return [prefixCls,item].filter(Boolean).join('-');
            })
            if(className)
            finalArray = classArray.concat([(className as string)]);
            else{
                finalArray = classArray
            }
        }else{
            if(className){finalArray = [[prefixCls,name].filter(Boolean).join('-'),className]}
            else finalArray = [[prefixCls,name].filter(Boolean).join('-')]
        }

        return finalArray.filter(Boolean).join(' ');
    }
}
export default getClasses;