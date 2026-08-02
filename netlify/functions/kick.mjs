const USER_AGENT =
  'Mozilla/5.0 (compatible; AtaPortfolio/1.0; +https://ataersoy.com)'

export async function handler(event) {
  const username =
    event.queryStringParameters?.u ||
    event.path?.split('/').filter(Boolean).pop() ||
    'fatalstrokelive'

  if (!username || username === 'kick') {
    return json(400, { error: 'Missing username' })
  }

  try {
    const res = await fetch(`https://kick.com/api/v2/channels/${username}`, {
      headers: {
        Accept: 'application/json',
        'User-Agent': USER_AGENT,
      },
    })

    if (!res.ok) {
      return json(res.status, { error: 'Kick upstream error', status: res.status })
    }

    const data = await res.json()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    }
  } catch (err) {
    return json(502, {
      error: 'Kick fetch failed',
      message: err instanceof Error ? err.message : 'unknown',
    })
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  }
}
