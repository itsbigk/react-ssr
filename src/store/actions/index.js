export const PAGE_RENDER = 'PAGE_RENDER'

export const fetchOnRender = () => dispatch => dispatch({
  type: PAGE_RENDER,
  payload: 321
})

export const fetchHeader = () => dispatch => {
  console.log('header loaded')
}
