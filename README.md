# Ata Ersoy — Kişisel Portfolyo

Vite + React + TypeScript. FatalStroke Live odaklı modern portfolyo.

## Çalıştırma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Özellikler

- TR / EN dil seçici
- Kick canlı durumu (dev’de `/api/kick` proxy)
- “Şu an” durum widget’ı
- Proje kapakları, hakkımda foto (GitHub avatar)
- İletişim formu (mailto veya Formspree)
- Klipler sayfası (Kick player + YouTube)
- SEO / Open Graph (`public/og.png`)
- Custom domain hazırlığı (`public/CNAME` → `ataersoy.com`)

## Ayarlar

`src/data/site.ts` içinde:

- `email` — iletişim formu
- `discord` / `discordUrl` — Discord
- `canonicalUrl` — domain
- `formspreeId` — Formspree form ID (opsiyonel)
- `statusConfig.forceLive` — canlıyı manuel zorla
- `statusConfig.activity` — offline “şu an” metni

## Custom domain

1. Domain al (`ataersoy.com` vb.)
2. Hosting’e bağla (Vercel/Netlify/GitHub Pages)
3. `public/CNAME` ve `site.canonicalUrl` değerlerini güncelle
4. DNS: A/CNAME kayıtlarını hosting’in dediği gibi ekle

## Sosyal

- GitHub: ataersoy44945
- Instagram: @ata44945
- YouTube / Kick: fatalstrokelive
