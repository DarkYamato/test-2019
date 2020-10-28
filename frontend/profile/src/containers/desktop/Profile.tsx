import { connect } from 'react-redux'
import { change, save } from '../../actions'

import Profile from '../../components/desktop/Profile'

export default connect(
  state => ({
    firstName: state.me.profile.firstName,
    lastName: state.me.profile.lastName,
  }),
  dispatch => ({
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onSave: () => dispatch(save())
  })
)(Profile)