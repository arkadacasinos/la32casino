export default function Page() {
  const REF_URL = 'https://copper-ray.com/?serial=61365830&creative_id=9330'

  return (
    <div className="min-h-screen bg-[#0e0817] text-white flex flex-col font-sans">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#ff007a] via-[#e6006e] to-[#ff1a8a] text-white text-xs md:text-sm font-semibold py-1.5 px-4 text-center relative flex items-center justify-center gap-2">
        <span aria-hidden="true">🎉</span>
        <a href={REF_URL} className="hover:underline flex items-center gap-1">
          <span>Зарегистрируйся сейчас и забери свой бонус!</span>
        </a>
        <a
          href={REF_URL}
          aria-label="Закрыть уведомление"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-base px-1"
        >
          ×
        </a>
      </div>

      {/* Header / Navigation Bar */}
      <header className="bg-[#120a1f] border-b border-[#251538] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Mobile Hamburger Link (Pure CSS :target) */}
            <a
              href="#k9q2-mobile-nav"
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Открыть меню навигации"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* Logo */}
            <a href={REF_URL} className="flex items-center gap-1 group">
              <span className="text-2xl font-black italic tracking-tighter text-[#ff007a] group-hover:brightness-110 drop-shadow-[0_0_12px_rgba(255,0,122,0.6)]">
                ЛЯ
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white -mt-1 block ml-1 bg-[#ff007a]/20 px-1.5 py-0.5 rounded border border-[#ff007a]/40">
                Casino
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
              <a href={REF_URL} className="flex items-center gap-2 hover:text-[#ff007a] transition-colors">
                <svg className="w-4 h-4 text-[#ff007a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2m0 13l-4-4m4 4l4-4" />
                </svg>
                Бонусы
              </a>
              <a href={REF_URL} className="flex items-center gap-2 hover:text-[#ff007a] transition-colors">
                <svg className="w-4 h-4 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                Казино
              </a>
              <a href={REF_URL} className="flex items-center gap-2 hover:text-[#ff007a] transition-colors">
                <svg className="w-4 h-4 text-[#ff007a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Live Казино
              </a>
            </nav>
          </div>

          {/* Right Header Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={REF_URL}
              aria-label="Поиск игр"
              className="hidden sm:flex p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#221338] hover:bg-[#2e1a4d] border border-[#3d2460] rounded-full transition-colors"
            >
              Вход
            </a>
            <a
              href={REF_URL}
              className="k9q2-btn-pink px-4 md:px-5 py-2 text-sm font-bold text-white rounded-full flex items-center gap-1.5"
            >
              <span>Регистрация</span>
              <svg className="w-4 h-4 hidden sm:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Pure CSS Mobile Drawer Navigation (:target based) */}
      <div id="k9q2-mobile-nav" className="k9q2-drawer fixed inset-0 z-50">
        {/* Scrim backdrop */}
        <a
          href="#!"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-label="Закрыть меню"
        />
        {/* Drawer panel */}
        <div className="relative w-4/5 max-w-sm h-full bg-[#120a1f] border-r border-[#2d1945] p-6 flex flex-col z-10 shadow-2xl overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-[#251538]">
            <a href={REF_URL} className="flex items-center gap-1">
              <span className="text-2xl font-black italic text-[#ff007a]">ЛЯ</span>
              <span className="text-xs font-bold uppercase text-white bg-[#ff007a]/20 px-1.5 py-0.5 rounded border border-[#ff007a]/40">
                Casino
              </span>
            </a>
            <a href="#!" className="p-2 text-gray-400 hover:text-white" aria-label="Закрыть меню">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          <div className="py-6 flex flex-col gap-4 text-base font-semibold">
            <a href={REF_URL} className="py-2 px-3 rounded hover:bg-[#1d1033] flex items-center justify-between">
              <span>Бонусы</span>
              <span className="text-xs bg-[#ff007a] text-white px-2 py-0.5 rounded-full">+225%</span>
            </a>
            <a href={REF_URL} className="py-2 px-3 rounded hover:bg-[#1d1033]">
              Казино Слоты
            </a>
            <a href={REF_URL} className="py-2 px-3 rounded hover:bg-[#1d1033]">
              Live Казино
            </a>
            <a href={REF_URL} className="py-2 px-3 rounded hover:bg-[#1d1033]">
              Рабочее Зеркало
            </a>
            <a href={REF_URL} className="py-2 px-3 rounded hover:bg-[#1d1033]">
              Мобильная версия
            </a>
          </div>

          <div className="mt-auto pt-6 border-t border-[#251538] flex flex-col gap-3">
            <a
              href={REF_URL}
              className="k9q2-btn-pink w-full py-3 text-center rounded-xl font-bold text-white shadow-lg"
            >
              Регистрация за 10 сек
            </a>
            <a
              href={REF_URL}
              className="w-full py-3 text-center rounded-xl font-semibold text-white bg-[#221338] border border-[#3d2460]"
            >
              Вход в профиль
            </a>
          </div>
        </div>
      </div>

      {/* FIRST SCREEN / HERO (Matching Screenshot 2 exactly) */}
      <section className="k9q2-hero-wrap border-b border-[#251538]">
        <div className="k9q2-hero-glow" />

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 lg:py-12">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-[#170a27] via-[#210c38] to-[#12071e] border border-[#3b1c61]/60 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            
            {/* Background Image / Art matching Ocean Drive Miami night vibes */}
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JPYmu820TyTPMl2YRpBOAfTcqGiSmg.png"
                alt="La Casino официальный сайт и рабочее зеркало"
                className="w-full h-full object-cover object-right brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0617] via-[#0d0617] via-55% to-transparent w-full md:w-[72%]" />
              <div className="absolute inset-0 bg-[#0d0617]/40 md:hidden" />
            </div>

            {/* Hero Foreground Content */}
            <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-2xl flex flex-col items-start justify-center min-h-[340px] md:min-h-[440px]">
              <span className="inline-block text-[#00e5ff] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 bg-[#00e5ff]/10 border border-[#00e5ff]/30 px-3 py-1 rounded-full">
                Добро пожаловать в La Casino
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
                МОЩНЫЙ СТАРТ:
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-snug">
                до <span className="text-[#00e5ff] font-bold">225%</span> +{' '}
                <span className="text-[#ff007a] font-bold">1000 ФС</span> на четыре депозита
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={REF_URL}
                  className="k9q2-btn-pink px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-black text-sm sm:text-base uppercase tracking-wider text-white shadow-xl flex items-center gap-2"
                >
                  <span>Зарегаться!</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href={REF_URL}
                  className="px-6 py-3.5 rounded-full font-bold text-sm text-gray-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors"
                >
                  Зеркало Вход
                </a>
              </div>
            </div>
          </div>

          {/* TOP PAYOUTS TICKER (Directly matching Screenshot 2) */}
          <div className="mt-6 rounded-2xl bg-[#140b22] border border-[#2d1847] p-4 md:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#231238]">
              <div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400">
                  <span>ТОП Выплаты</span>
                  <span className="text-[#ff007a]">💥</span>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white tracking-tight mt-0.5">
                  275 264 RUB
                </div>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Живой поток выигрышей онлайн</span>
              </div>
            </div>

            {/* Payouts stream */}
            <div className="k9q2-ticker-wrap flex items-center gap-3 overflow-x-auto pb-2">
              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-[10px] font-black text-white">
                  ×9,2
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 77••••14</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    3 500 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">379 RUB депозит</div>
                </div>
              </a>

              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-[10px] font-black text-white">
                  ×5
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 26••••59</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    5 000 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">1 001 RUB депозит</div>
                </div>
              </a>

              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-[10px] font-black text-white">
                  ×6,5
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 45••••91</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    6 500 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">1 000 RUB депозит</div>
                </div>
              </a>

              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-[10px] font-black text-white">
                  ×6,2
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 82••••57</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    3 200 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">516 RUB депозит</div>
                </div>
              </a>

              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-[10px] font-black text-white">
                  ×3,2
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 25••••82</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    3 200 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">1 001 RUB депозит</div>
                </div>
              </a>

              <a
                href={REF_URL}
                className="shrink-0 flex items-center gap-2.5 bg-[#1a0e2d] hover:bg-[#22133a] border border-[#311850] px-3.5 py-2 rounded-xl transition-all"
              >
                <div className="k9q2-burst-badge w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center text-[10px] font-black text-white">
                  ×2,6
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ID 37••••19</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">
                    3 000 RUB <span className="text-emerald-400 text-[10px]">↗</span>
                  </div>
                  <div className="text-[9px] text-gray-500">1 130 RUB депозит</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO PROSTYNIA TEXT (350 words dense SEO content with all keywords in H2 and text) */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 md:py-14 w-full">
        <article className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
          
          {/* Section 1 */}
          <section id="official" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#ff007a]">★</span>
              <span>La Casino официальный сайт и преимущества клуба</span>
            </h2>
            <p className="text-gray-300">
              Лицензионный <strong>La Casino официальный сайт</strong> дарит игрокам надежный доступ к топовым слотам и настольным играм. Запуская <strong>La Casino</strong>, пользователи получают защищенные транзакции, моментальный вывод выигрышей и щедрые турнирные события. Надежная площадка <strong>la casino</strong> ценится за прозрачные правила и оперативную службу поддержки в круглосуточном чате.
            </p>
          </section>

          {/* Section 2 */}
          <section id="zerkalo" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#00e5ff]">✦</span>
              <span>La Casino зеркало рабочее на сегодня без блокировок</span>
            </h2>
            <p className="text-gray-300">
              Если основной домен временно недоступен, актуальное <strong>La Casino зеркало</strong> помогает мгновенно обойти любые ограничения провайдеров. Через надежное <strong>la casino зеркало</strong> можно войти в личный кабинет, пополнить счет и активировать приветственные бонусы. Синхронизация данных в <strong>la casino</strong> гарантирует сохранность баланса при входе с любого устройства.
            </p>
          </section>

          {/* Section 3 */}
          <section id="play" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#ff007a]">♠</span>
              <span>La Casino играть на реальные деньги и демо</span>
            </h2>
            <p className="text-gray-300">
              В клубе <strong>La Casino играть</strong> можно в более чем 4000 лицензионных автоматов с высокой отдачей RTP. Новички могут бесплатно протестировать демо-режим, а любители риска выбирают в <strong>la casino играть</strong> на рубли, получая доступ к джекпотам и множителям до х50 000. В <strong>La Казино</strong> каждый спин приносит азарт и шанс сорвать рекордный куш.
            </p>
          </section>

          {/* Section 4 */}
          <section id="lya-official" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#00e5ff]">◆</span>
              <span>Ля Казино официальный сайт для игроков из России</span>
            </h2>
            <p className="text-gray-300">
              Популярное <strong>Ля Казино</strong> открывает двери в мир лицензионного гемблинга с быстрыми выплатами на карты и СБП. Посещая <strong>Ля Казино официальный сайт</strong>, вы находите оригинальные краш-игры, лайв-дилеров и рулетки. Официальный статус <strong>ля казино</strong> подтвержден сертификатами проверки честности генератора случайных чисел.
            </p>
          </section>

          {/* Section 5 */}
          <section id="lya-zerkalo" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#ff007a]">⚡</span>
              <span>Ля Казино зеркало рабочее и актуальные ссылки</span>
            </h2>
            <p className="text-gray-300">
              Безопасное <strong>Ля Казино зеркало рабочее</strong> позволяет оставаться в игре без использования VPN и сторонних программ. Рабочее <strong>Ля Казино зеркало</strong> обеспечивает быстрый пинг и стабильный доступ к балансу. Заходя через <strong>ля казино зеркало рабочее</strong> или альтернативное <strong>ля казино зеркало</strong>, вы получаете полноценный функционал десктопного портала.
            </p>
          </section>

          {/* Section 6 */}
          <section id="lya-online" className="bg-[#140b22] border border-[#2b1744] p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-pretty flex items-center gap-2">
              <span className="text-[#00e5ff]">🎰</span>
              <span>Ля Казино играть онлайн на смартфонах и ПК</span>
            </h2>
            <p className="text-gray-300">
              Вы можете в <strong>Ля Казино играть</strong> с любого гаджета через оптимизированный мобильный сайт. Портал <strong>Ля Казино онлайн</strong> мгновенно подстраивается под экран любого размера. Выбирайте надежное <strong>ля казино онлайн</strong>, активируйте приветственный бонус до 225% и 1000 фриспинов и начинайте в <strong>ля казино играть</strong> прямо сейчас!
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={REF_URL}
                className="k9q2-btn-pink px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              >
                Регистрация в Ля Казино
              </a>
              <a
                href={REF_URL}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#221338] hover:bg-[#2e1a4d] border border-[#3d2460]"
              >
                Вход через зеркало
              </a>
            </div>
          </section>

        </article>
      </main>

      {/* FOOTER with Anchor Hashtags (matching user memory requirements) */}
      <footer className="bg-[#0b0613] border-t border-[#231238] py-8 px-4 text-xs text-gray-400">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Hashtags anchor navigation */}
          <div>
            <div className="text-xs uppercase font-bold text-gray-500 mb-3 tracking-wider">
              Навигация по разделам сайта:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaCasino
              </a>
              <a href="#zerkalo" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaCasinoЗеркало
              </a>
              <a href="#play" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaCasinoИграть
              </a>
              <a href="#official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaCasinoОфициальный
              </a>
              <a href="#official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaCasinoОфициальныйСайт
              </a>
              <a href="#play" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #LaКазино
              </a>
              <a href="#lya-official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазино
              </a>
              <a href="#lya-zerkalo" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноЗеркало
              </a>
              <a href="#lya-zerkalo" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноЗеркалоРабочее
              </a>
              <a href="#play" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноИграть
              </a>
              <a href="#lya-online" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноОнлайн
              </a>
              <a href="#lya-official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноОфициальный
              </a>
              <a href="#lya-official" className="hover:text-[#ff007a] bg-[#150b24] px-2.5 py-1 rounded-md border border-[#2b1744] transition-colors">
                #ЛяКазиноОфициальныйСайт
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1c0f2e] flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500">
            <p>© 2026 La Casino (Ля Казино). Официальный сайт и рабочее зеркало онлайн. 18+</p>
            <div className="flex items-center gap-4">
              <a href={REF_URL} className="hover:text-gray-300 transition-colors">
                Ответственная игра
              </a>
              <a href={REF_URL} className="hover:text-gray-300 transition-colors">
                Конфиденциальность
              </a>
              <a href={REF_URL} className="hover:text-gray-300 transition-colors">
                Правила клуба
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
