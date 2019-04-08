// @flow

import { VisibilityFilters } from '../actions'

type Action = {
  type: string;
  filter: string;
};

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: Action): string => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
