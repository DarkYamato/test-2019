import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

const initialState = {
  rows: [],
  initRows: [],
  count: 0,
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list, initRows: [...list.rows] }),
  [actions.addFilter]: (state, {filter}) => {
    const filterFunc = (a, b) => {
      if (get(a, filter) < get(b, filter))
        return -1;
      if (get(a, filter) > get(b, filter))
        return 1;
      return 0;
    };

    const get = (object, key) => {
      let keys = key.split('.');
      for (let i = 0; i < keys.length; i++) {
          if (!object.hasOwnProperty(keys[i])) {
              return null;
          }
          object = object[keys[i]];
      }
      return object;
    }
    
    const sortedData = filter === 'reset' ? state.initRows : state.rows.sort(filterFunc)

    return ({
      ...state,
      rows: [...sortedData]
    })
  },
  [actions.clear]: () => initialState,
})
