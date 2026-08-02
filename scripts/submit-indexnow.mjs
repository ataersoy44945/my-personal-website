import { allPrerenderPaths, siteUrl } from './seo-routes.mjs'
import { indexNowKey } from './indexnow-key.mjs'

const keyLocation = `${siteUrl}/${indexNowKey}.txt`
const urlList = allPrerenderPaths().map((path) =>
  path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
)

const endpoints = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

const body = {
  host: 'ataersoy.com',
  key: indexNowKey,
  keyLocation,
  urlList,
}

console.log(`Submitting ${urlList.length} URLs via IndexNow…`)

for (const endpoint of endpoints) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    })
    const text = await res.text()
    console.log(`${endpoint} → ${res.status} ${text.slice(0, 120)}`)
  } catch (err) {
    console.error(`${endpoint} failed:`, err.message)
  }
}

console.log('Done')
