import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load, addFilter } from '../../actions/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
    addFilter: filter => dispatch(addFilter(filter))
  })
)(enhance(List))
