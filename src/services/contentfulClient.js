import { createClient } from 'contentful'

let client
let authorized

export function initClient (
  spaceId, accessToken, contentfulEnvironment, previewAccessToken, preview = false
) {
  const options = {
    space: spaceId,
    accessToken: preview ? previewAccessToken : accessToken,
    environment: contentfulEnvironment,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  }
  client = createClient(options)
  authorized = true
}

export function getClient () {
  return authorized && client
}
