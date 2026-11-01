import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0f0a14]">
      <head>
        <meta name="yandex-verification" content="8b64b3c0f45d8619" />
        <meta charSet="utf-8" />
        <title>La Casino Официальный Сайт | Ля Казино Зеркало Рабочее Вход и Бонусы 2026</title>
        <meta
          name="description"
          content="Официальный сайт La Casino и рабочее зеркало на сегодня. Вход и регистрация в Ля Казино онлайн: бонусы до 225% + 1000 FS на первые депозиты, быстрые выплаты и лицензионные слоты."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://la32casino.vercel.app" />
        <meta name="theme-color" content="#120c1a" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino Официальный Сайт | Ля Казино Зеркало Рабочее Вход" />
        <meta
          property="og:description"
          content="Официальный сайт La Casino и рабочее зеркало онлайн. До 225% + 1000 FS бонус, быстрый вывод выигрышей."
        />
        <meta property="og:url" content="https://la32casino.vercel.app" />
        <meta property="og:site_name" content="La Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino Официальный Сайт | Ля Казино Зеркало Рабочее" />
        <meta
          name="twitter:description"
          content="Играть онлайн в La Casino: актуальное рабочее зеркало, регистрация и вход на официальный сайт."
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[#0e0817] text-white selection:bg-[#ff007a] selection:text-white">
        {children}
      </body>
    </html>
  )
}
