import classes from '../classes'

describe('classes', () => {
    it('input cn', () => {
        const result = classes('cn');
        expect(result).toEqual('cn');
    })
    it('input cn1 and cn2',()=>{
        const result = classes('cn1','cn2');
        expect(result).toEqual('cn1 cn2');
    })
    it('input cn and undefined',()=>{
        const result = classes('cn',undefined);
        expect(result).toEqual('cn');
    })
});