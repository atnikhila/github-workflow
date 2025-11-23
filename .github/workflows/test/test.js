const sum= require('../index')
test('Test case 1: adds 2+3 equals to 5',()=>{
    expect(sum(2,3)).toBe(5)
})

test('Test case 2: add negative numbers ', ()=>{
    expect(sum(-2,-3)).toBe(-5)
})