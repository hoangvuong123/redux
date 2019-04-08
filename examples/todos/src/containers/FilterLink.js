// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type { State, Dispatch } from '../type'
import type { VisibilityFilter } from '../type/VisibilityFilter'

type OwnProps = {
  filter: VisibilityFilter
};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch , ownProps: OwnProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
