import getClasses from "../getClasses";

describe('getClasses', () => {
    const cn = getClasses('kawaii-design');
    it('input sort', () => {
        const result = cn('modal');
        expect(result).toEqual('kawaii-design-modal');
    })
    it('input sort and className',()=>{
        const result = cn('modal','className');
        expect(result).toEqual('kawaii-design-modal className');
    })
    it('input sort and undefined',()=>{
        const result = cn('modal',undefined);
        expect(result).toEqual('kawaii-design-modal');
    })
    it('input two sort',()=>{
        const result = cn(['modal','icon']);
        expect(result).toEqual('kawaii-design-modal kawaii-design-icon');
    })
    it('input two sort and className',()=>{
        const result = cn(['modal','icon'],'className');
        expect(result).toEqual('kawaii-design-modal kawaii-design-icon className');
    })
});