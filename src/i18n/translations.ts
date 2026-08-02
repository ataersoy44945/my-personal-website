export type Lang = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      stack: 'Stack',
      stream: 'Yayın',
      clips: 'Klipler',
      contact: 'İletişim',
    },
    home: {
      eyebrow: 'Geliştirici · Yayıncı · Üretici',
      role: 'Oyun geliştirici & FatalStroke Live',
      lead:
        'İstanbul Kültür Üniversitesi Bilgisayar Programcılığı mezunu. Web’den mobil uygulamaya, yönetim sistemlerinden canlı yayın markasına kadar üreten bir geliştiriciyim. Şu an odağım: sıfırdan yeni oyunlar kurmak ve oynanış kalitesini yükseltmek.',
      ctaProjects: 'İşlerime bak',
      ctaStream: 'Yayın markası',
      exploreEyebrow: 'Keşfet',
      exploreTitle: 'Kanıtlanmış işler, net yön.',
      exploreSub:
        'Portfolyoda ürünler, teknik stack, yayın kimliği ve iletişim bir arada.',
      strengthsEyebrow: 'Kısa özet',
      strengthsTitle: 'Neden buradayım?',
      strengths: [
        {
          title: 'Üreten geliştirici',
          body: 'Marka siteleri, mobil uygulama ve yazılım sistemlerini uçtan uca hayata geçirdim. Kod sadece yazılmaz — ürün haline gelir.',
        },
        {
          title: 'Oyun odağında ileri',
          body: 'Mezuniyet sonrası rotamı oyun geliştirmeye çevirdim. Mekanik, sistem ve oyuncu hissi üzerine aktif üretimdeyim.',
        },
        {
          title: 'Görünür marka',
          body: 'FatalStroke Live ile Kick ve YouTube’da kendi kimliğimi büyütüyorum. Ürettiğimi gizlemiyorum — paylaşıyor, test ediyor, geliştiriyorum.',
        },
      ],
    },
    about: {
      eyebrow: 'Hakkımda',
      title: 'Disiplinli üretim. Net yön.',
      description:
        'Mezun bir bilgisayar programcısıyım. Ürün çıkarmayı bilen, şimdi oyun dünyasında seviye atlayan bir geliştirici.',
      whoTitle: 'Kimim?',
      whoBody:
        'Ben Ata Ersoy. İstanbul Kültür Üniversitesi Bilgisayar Programcılığı’ndan mezun oldum. Eğitim sürecinde ve sonrasında web siteleri, mobil uygulamalar ve nesne tabanlı yazılım sistemleri ürettim; canlıda çalışan ürünler teslim ettim. Bugün o birikimi oyun geliştirmeye taşıyorum: mekanik tasarlıyor, sistem kuruyor, oyuncu deneyimini sıfırdan inşa ediyorum. FatalStroke Live markasıyla Kick ve YouTube’da yayın açıyor; üretim sürecini şeffaf tutuyorum.',
      whatTitle: 'Ne masaya koyuyorum?',
      whatBody:
        'Hızlı öğrenen, teslim eden ve görsel kaliteye önem veren bir geliştiriciyim. Modern web stack’i (React, Next.js, TypeScript), mobil (React Native) ve Python ile OOP sistemler konusunda pratik deneyimim var. Şu anki önceliğim oyun: oynanası, kimliği olan ve bitmiş hissettiren ürünler çıkarmak. İş birliği, stüdyo veya proje ortaklığı arayanlar için hazırım — net iletişim, düzenli ilerleme, sonuç odaklı çalışma.',
      highlightsTitle: 'Güçlü yanlar',
      highlights: [
        {
          title: 'Ürün teslimi',
          body: 'Datcia, Dencha, FatalStroke ve birden fazla yazılım sistemi — fikirden çalışan ürüne.',
        },
        {
          title: 'Teknik derinlik',
          body: 'TypeScript, React, Next.js, React Native, Python, OOP ve modern araç zinciri.',
        },
        {
          title: 'Oyun & yayın',
          body: 'Aktif oyun geliştirme + FatalStroke Live ile kendi markamı büyütme.',
        },
        {
          title: 'Disiplin',
          body: 'Temiz arayüz, sürdürülebilir kod ve bitirme alışkanlığı.',
        },
      ],
      education: 'Eğitim',
      educationValue:
        'İstanbul Kültür Üniversitesi — Bilgisayar Programcılığı (mezun)',
      focus: 'Odak',
      focusValue: 'Oyun geliştirme · ürün mühendisliği · yayıncılık',
      stream: 'Marka',
      streamValue: 'FatalStroke Live — Kick / YouTube',
    },
    projects: {
      eyebrow: 'Projeler',
      title: 'Seçilmiş işler — kanıt dosyası.',
      description:
        'Marka siteleri, mobil uygulama, AI deneyimi ve yazılım sistemleri. Detay için karta tıkla; kod için GitHub’a bak.',
      all: 'Tümü',
      live: 'Canlı site →',
      github: 'GitHub →',
      details: 'Detay →',
      back: '← Tüm projeler',
      filters: 'Proje filtreleri',
      notFound: 'Proje bulunamadı.',
      notFoundDesc: 'Bu proje listede yok veya taşındı.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Üretim araçlarım.',
      description:
        'Gerçek projelerde kullandığım diller, framework’ler ve odak alanları — spekülasyon değil, pratik.',
    },
    stream: {
      eyebrow: 'Yayın',
      title: 'FatalStroke Live.',
      description:
        'Kendi yayın markam. Oyun, sohbet ve üretim sürecini canlıda büyütüyorum.',
      ready: 'Canlıya hazır',
      liveNow: 'Şu an canlı',
      offline: 'Şu an offline',
      body:
        'FatalStroke Live; oyun kültürü, topluluk ve içerik. Kick’te canlı yayın, YouTube’da arşiv. Marka sitesi fatalstroke.com üzerinde.',
      watchKick: 'Kick’te izle',
      youtube: 'YouTube',
      site: 'fatalstroke.com',
    },
    clips: {
      eyebrow: 'Klipler',
      title: 'Marka & içerik yüzeyi.',
      description:
        'Kick oynatıcı, YouTube kanalı ve FatalStroke kimliğine hızlı erişim.',
      open: 'Aç →',
      playerTitle: 'Kick oynatıcı',
      youtubeEmpty:
        'Gömülü video ID’si henüz eklenmedi. Kanalı takip et — içerik geldikçe buraya işleriz.',
      openChannel: 'YouTube kanalına git',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Proje, iş birliği, yayın.',
      description:
        'Şirket, stüdyo veya bağımsız ortaklık için yaz. Net dönüş yaparım — form, e-posta veya sosyal hesaplar.',
      name: 'Adın',
      email: 'E-posta',
      message: 'Mesajın',
      send: 'Gönder',
      sending: 'Gönderiliyor…',
      success: 'Mesajın alındı — en kısa sürede dönüş yapacağım.',
      error: 'Gönderilemedi. E-posta veya Discord’dan yazabilirsin.',
      orSocials: 'Diğer kanallar',
      copyDiscord: 'Kullanıcı adını kopyala',
      copied: 'Kopyalandı!',
    },
    status: {
      title: 'Şu an',
      live: 'CANLI',
      offline: 'Offline',
      onKick: 'Kick’te yayında',
      watching: 'İzlemek için tıkla',
    },
    explore: {
      about: 'Mezun profil, güçlü yanlar ve üretim hikâyem',
      projects: 'Canlı ürünler, mobil uygulama ve yazılım sistemleri',
      stack: 'TypeScript, React, Python ve oyun odaklı araçlar',
      stream: 'FatalStroke Live — yayın markası ve topluluk',
      clips: 'Kick, YouTube ve marka yüzeyine hızlı giriş',
      contact: 'İş birliği, proje ve profesyonel iletişim',
    },
    categories: {
      Web: 'Web',
      Mobil: 'Mobil',
      Yazılım: 'Yazılım',
      AI: 'AI',
    },
    footer: '© {year} Ata Ersoy',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      stream: 'Stream',
      clips: 'Clips',
      contact: 'Contact',
    },
    home: {
      eyebrow: 'Developer · Streamer · Builder',
      role: 'Game developer & FatalStroke Live',
      lead:
        'Computer Programming graduate from Istanbul Kultur University. I’ve shipped brand sites, mobile apps, and software systems — and I’m now focused on building new games from the ground up.',
      ctaProjects: 'See my work',
      ctaStream: 'Stream brand',
      exploreEyebrow: 'Explore',
      exploreTitle: 'Proven work. Clear direction.',
      exploreSub:
        'Products, stack, stream identity, and contact — all in one place.',
      strengthsEyebrow: 'At a glance',
      strengthsTitle: 'Why this portfolio?',
      strengths: [
        {
          title: 'Builder, not just coder',
          body: 'I’ve taken brand websites, a mobile app, and software systems from idea to working product.',
        },
        {
          title: 'Games ahead',
          body: 'After graduation I shifted hard into game development — mechanics, systems, and player feel.',
        },
        {
          title: 'Visible brand',
          body: 'As FatalStroke Live on Kick and YouTube I share the craft publicly — build, test, improve.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Disciplined output. Clear aim.',
      description:
        'A Computer Programming graduate who ships products — now leveling up in games.',
      whoTitle: 'Who am I?',
      whoBody:
        'I’m Ata Ersoy. I graduated from Istanbul Kultur University in Computer Programming. During and after school I built websites, mobile apps, and OOP systems — real products that ship. Today I carry that craft into games: designing mechanics, building systems, and shaping player feel from scratch. I also stream as FatalStroke Live on Kick and YouTube, keeping the process visible.',
      whatTitle: 'What I bring',
      whatBody:
        'I learn fast, deliver, and care about visual quality. Hands-on with modern web (React, Next.js, TypeScript), mobile (React Native), and Python OOP systems. My priority now is games — products that feel finished and carry an identity. Open to studios, collabs, and serious project work: clear communication, steady progress, results first.',
      highlightsTitle: 'Strengths',
      highlights: [
        {
          title: 'Shipment',
          body: 'Datcia, Dencha, FatalStroke, and multiple software systems — idea to working product.',
        },
        {
          title: 'Technical depth',
          body: 'TypeScript, React, Next.js, React Native, Python, OOP, and a modern toolchain.',
        },
        {
          title: 'Games & stream',
          body: 'Active game development plus growing FatalStroke Live as my own brand.',
        },
        {
          title: 'Discipline',
          body: 'Clean UI, sustainable code, and a habit of finishing.',
        },
      ],
      education: 'Education',
      educationValue:
        'Istanbul Kultur University — Computer Programming (graduate)',
      focus: 'Focus',
      focusValue: 'Game development · product engineering · streaming',
      stream: 'Brand',
      streamValue: 'FatalStroke Live — Kick / YouTube',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work — proof file.',
      description:
        'Brand sites, mobile, AI, and software systems. Open a card for details; GitHub for the code.',
      all: 'All',
      live: 'Live site →',
      github: 'GitHub →',
      details: 'Details →',
      back: '← All projects',
      filters: 'Project filters',
      notFound: 'Project not found.',
      notFoundDesc: 'This project is missing or was moved.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'What I ship with.',
      description:
        'Languages, frameworks, and focus areas from real projects — not speculation.',
    },
    stream: {
      eyebrow: 'Stream',
      title: 'FatalStroke Live.',
      description:
        'My stream brand. Games, chat, and the build process — live.',
      ready: 'Ready to go live',
      liveNow: 'Live now',
      offline: 'Currently offline',
      body:
        'FatalStroke Live is games, community, and content. Live on Kick, archives on YouTube, brand site at fatalstroke.com.',
      watchKick: 'Watch on Kick',
      youtube: 'YouTube',
      site: 'fatalstroke.com',
    },
    clips: {
      eyebrow: 'Clips',
      title: 'Brand & content surface.',
      description:
        'Quick access to the Kick player, YouTube, and FatalStroke identity.',
      open: 'Open →',
      playerTitle: 'Kick player',
      youtubeEmpty:
        'No embedded video IDs yet. Follow the channel — embeds land here when uploads do.',
      openChannel: 'Open YouTube channel',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Projects, collabs, stream.',
      description:
        'Studios, companies, or independent partners — write me. Clear reply via form, email, or socials.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      success: 'Got it — I’ll reply soon.',
      error: 'Couldn’t send. Try email or Discord instead.',
      orSocials: 'Other channels',
      copyDiscord: 'Copy username',
      copied: 'Copied!',
    },
    status: {
      title: 'Now',
      live: 'LIVE',
      offline: 'Offline',
      onKick: 'Live on Kick',
      watching: 'Click to watch',
    },
    explore: {
      about: 'Graduate profile, strengths, and build story',
      projects: 'Live products, mobile app, and software systems',
      stack: 'TypeScript, React, Python, and game-focused tools',
      stream: 'FatalStroke Live — brand and community',
      clips: 'Kick, YouTube, and brand surface',
      contact: 'Collabs, projects, professional contact',
    },
    categories: {
      Web: 'Web',
      Mobil: 'Mobile',
      Yazılım: 'Software',
      AI: 'AI',
    },
    footer: '© {year} Ata Ersoy',
  },
} as const

export type Translation = (typeof translations)[Lang]
