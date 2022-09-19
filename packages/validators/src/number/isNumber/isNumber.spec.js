import { isNumber } from './isNumber.js'

fdescribe('isNumber', () => {
  it('should not throw for a number', () => {
    expect(isNumber(1)).toBe(1)
  })

  it('should not throw for a number as string', () => {
    expect(isNumber('10')).toBe('10')
  })

  it('should not throw for a science number as string', () => {
    expect(isNumber('10e10')).toBe('10e10')
  })

  it('should throw for a non-number', () => {
    expect(() => isNumber('1e')).toThrowError('Value is not a number')
    expect(() => isNumber('e')).toThrowError('Value is not a number')
    expect(() => isNumber('a')).toThrowError('Value is not a number')
  })
})
