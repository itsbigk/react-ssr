import { getClient } from './contentfulClient'

export function loadPage (page) {
  return getClient().getEntries({
    content_type: 'customPage',
    'fields.slug': page,
    include: 10
  }).then(payload => ({ page, data: payload.items[0] }))
}
