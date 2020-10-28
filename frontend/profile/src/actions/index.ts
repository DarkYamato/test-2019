import gql from 'graphql-tag'
import * as actions from '@frontend/dashboard/src/constants/me'
import { init } from '@frontend/dashboard/src/actions/init'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const save = () => async (dispatch, getState, client) => {
  const { firstName, lastName } = getState().me.profile

  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation UpdateProfile ($input: UpdateProfileInput!) {
        updateProfile(input: $input) {
            errors {
              firstName
              lastName
            }
          }
        }
      `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })
  
    if (data.updateProfile.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.updateProfile.errors,
      })
    } 
  } catch(e) {
    dispatch(init())
  }
}

export const clear = () => ({
  type: actions.clear,
})
