import { createElement } from 'react'
import styled from '@emotion/styled'

export interface SortElementProps {
    addFilter: () => void
}

const Select = styled.select(({ theme }) => ({
  width: 'fit-content',
  marginTop: '30px',
  marginLeft: '85px',
  padding: '5px',
  borderRadius: `${theme.borderRadius.n}px`,
  outline: 'none',
  border: '1px solid #8390AD',
  fontFamily: theme.fontFamily.sf,
  fontSize: `${theme.fontSizes.s}px`,
  fontWeight: theme.fontWeights.normal,
  lineHeight: theme.lineHeights.s,
  color: '#4D5A78'
}))

const Sort = ({
    addFilter
  }: SortElementProps) =>
    createElement(
      Select,
      {
        onChange: (e) => addFilter(e.target.value)
      },
      createElement('option', {
        value: 'reset'
      }, 'выбрать сортировку'),
      createElement('option', {
        value: 'profile.firstName'
      }, 'по имени'),
      createElement('option', {
        value: 'email'
      }, 'по email'),
      createElement('option', {
        value: 'registeredAt'
      }, 'по времени регистрации'),
      createElement('option', {
        value: 'lastLogonAt'
      }, 'по последнему входу'),
    )

export default Sort