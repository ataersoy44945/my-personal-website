import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

/**
 * Only capture projects that have a real running URL.
 * GitHub repo pages are NOT valid covers — use UI mockups instead.
 */
const outDir = path.resolve('public/projects')

const targets = [
  { id: 'fatalstroke', url: 'https://fatalstroke.com' },
  // Datcia: run local preview first, then set url
  // { id: 'datcia', url: 'http://127.0.0.1:3456' },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
})

for (const target of targets) {
  const file = path.join(outDir, `${target.id}.jpg`)
  console.log(`Capturing ${target.id}…`)
  try {
    await page.goto(target.url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    })
    await page.waitForTimeout(2500)
    await page.evaluate(() => {
      document
        .querySelectorAll(
          '[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"]',
        )
        .forEach((el) => {
          ;(el).style.display = 'none'
        })
    })
    await page.screenshot({
      path: file,
      type: 'jpeg',
      quality: 82,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    })
    console.log(`  saved ${file}`)
  } catch (err) {
    console.error(`  failed ${target.id}:`, err)
  }
}

await browser.close()
console.log('Done')
