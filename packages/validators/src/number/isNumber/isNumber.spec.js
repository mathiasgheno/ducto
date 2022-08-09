import { isNumber } from './isNumber.js'

describe('isNumber', () => {
  it('should not throw for a number', () => {
    expect(isNumber(1)).toBe(1)
  })

  it('should throw for a non-number', () => {
    expect(() => isNumber('1')).toThrowError('Value is not a number')
  })
})
