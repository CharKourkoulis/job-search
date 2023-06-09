import nextElementInList from '@utils/nextElementList'

describe('nextElementInList', () => {
  it('locates element in list and returns the next elements in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'
    const result = nextElementInList(list, value)
    expect(result).toBe('D')
  })

  describe('when element is at the last index', () => {
    it('locates element in list and returns the next elements in list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
