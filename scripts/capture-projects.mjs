import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const outDir = path.resolve('public/projects')

const targets = [
  { id: 'fatalstroke', url: 'https://fatalstroke.com' },
  { id: 'datcia', url: 'http://127.0.0.1:3456' },
  {
    id: 'dencha',
    url: 'https://github.com/ataersoy44945/Denchakuyumculukappstoreuygulamas-',
  },
  {
    id: 'weather-ai',
    url: 'https://github.com/ataersoy44945/weather-ai-chatbot',
  },
  {
    id: 'arac-kiralama',
    url: 'https://github.com/ataersoy44945/Arac-Kiralama-Sistemi',
  },
  { id: 'kuyumcu', url: 'https://github.com/ataersoy44945/Kuyumcu-Sistemi' },
  {
    id: 'depo-stok',
    url: 'https://github.com/ataersoy44945/Depo-ve-Stok-Y-netim-Sistemi',
  },
  {
    id: 'doktor-randevu',
    url: 'https://github.com/ataersoy44945/Online-Doktor-Randevu-Sistemi',
  },
  { id: 'seyahat', url: 'https://github.com/ataersoy44945/Seyahat-planlama' },
  { id: 'yemek', url: 'https://github.com/ataersoy44945/Yemek-Tarifleri' },
  { id: 'fitness', url: 'https://github.com/ataersoy44945/Fitness-Takip' },
  {
    id: 'kurs',
    url: 'https://github.com/ataersoy44945/Online-Kurs-Platformu',
  },
  { id: 'crm', url: 'https://github.com/ataersoy44945/Basit-CRM-sistemi' },
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
    // Hide cookie banners if any
    await page.evaluate(() => {
      document
        .querySelectorAll(
          '[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"]',
        )
        .forEach((el) => {
          el.style.display = 'none'
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
