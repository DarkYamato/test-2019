import styled from '@emotion/styled'

const ErrorText = styled.div(({ theme }) => ({
  color: theme.colors.red,
  marginTop: '10px',
  fontFamily: theme.fontFamily.sf,
  fontSize: '13px'
}))

export default ErrorText
