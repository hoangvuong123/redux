import visibilityFilter from './visibilityFilter'
import { VisibilityFilters } from '../actions'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual(VisibilityFilters.SHOW_ALL)
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: VisibilityFilters.SHOW_ACTIVE
      })
    ).toEqual(VisibilityFilters.SHOW_ACTIVE)
  })

})
