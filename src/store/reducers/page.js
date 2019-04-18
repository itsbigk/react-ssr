import { PAGE_RENDER } from '../actions/page'

const initialState = {
  test: 123,
  page: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_RENDER:
      return {
        ...state,
        test: action.test,
        page: action.page
      }
    default:
      return state
  }
}
