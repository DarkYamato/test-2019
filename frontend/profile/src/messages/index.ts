import { defineMessages } from 'react-intl'

const namespace: string = '@frontend/dashboard'

export default defineMessages({
  edit: {
    id: `${namespace}.edit`,
    defaultMessage: 'Редактировать профиль',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  enterFirstName: {
    id: `${namespace}.enter_firstName`,
    defaultMessage: 'Введите имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  enterLastName: {
    id: `${namespace}.enter_lastName`,
    defaultMessage: 'Введите фамилию',
  },
  save: {
    id: `${namespace}.save`,
    defaultMessage: 'Сохранить',
  },
  root: {
    id: `${namespace}.root`,
    defaultMessage: 'На главную',
  },
})