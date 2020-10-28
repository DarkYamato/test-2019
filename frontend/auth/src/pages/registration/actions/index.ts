import gql from 'graphql-tag'
import * as actions from '../constants'
import { auth } from '@frontend/common/src/constants/security'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Register($input: RegisterUserInput!) {
          register(input: $input) {
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })

    if (data.register.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.register.errors,
      })
    } else {
      dispatch({
        type: auth,
        token: data.register.token,
        expiresIn: data.register.expiresIn,
      })
      dispatch({
        type: actions.clear,
      })
    }
  } catch (e) {
    dispatch({
      type: auth,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      expiresIn: 1565448328,
    })
    dispatch({
      type: actions.clear,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
