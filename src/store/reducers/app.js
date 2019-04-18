import {
  deliveryAccessToken, spaceId, contentfulEnvironment, previewAccessToken
} from 'config'

const initialState = {
  authState: 'success',
  deliveryAccessToken,
  spaceId,
  contentfulEnvironment,
  previewAccessToken
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
