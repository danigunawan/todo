import { connect } from 'react-redux'
import actions from 'todo/actions'
import Link from 'todo/components/Link'

const mapStateToProps = (state, ownProps) => ({ active: ownProps.filter === state.visibilityFilter })

const mapDispatchToProps = (dispatch, ownProps) => ({ onClick: () => dispatch(actions.setVisibilityFilter(ownProps.filter)) })

export default connect(mapStateToProps, mapDispatchToProps)(Link)
