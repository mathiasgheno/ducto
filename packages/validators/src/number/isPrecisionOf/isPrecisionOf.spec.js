import { isPrecisionOf } from './isPrecisionOf.js'

describe('isPrecisionOf', () => {
  it('should return the value if it is a number', () => {
    expect(isPrecisionOf(10)(0)).toBe(0)
  })

  it('should return the value if it is a number', () => {
    expect(isPrecisionOf(10.1010)(4)).toBe(4)
  })

  it('should return the value if it is a number', () => {
    expect(isPrecisionOf(10.1010)(2)).toBe(2)
  })

  it('should throw an error if the value is not a number', () => {
    expect(() => isPrecisionOf(10)('0')).toThrowError('Value is not a number')
  })

  it('should throw an error if the value is not a precision of 10', () => {
    expect(() => isPrecisionOf(10)(10.1010)).toThrowError('Value is not a precision of 10')
  })

  it('should throw an error if the value is not a precision of 10', () => {
    expect(() => isPrecisionOf(10)(10.1010)).toThrowError('Value is not a precision of 10')
  })

  it('should throw an error if the value is not a precision of 10', () => {
    expect(() => isPrecisionOf(10)(10.1010)).toThrowError('Value is not a precision of 10')
  })
})
