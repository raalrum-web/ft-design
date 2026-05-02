import { useState, useEffect } from 'react';
import { Footer, Header } from './components';
import { BookScreen, ConfirmScreen, HomeScreen, ServicesScreen } from './screens';

/** Header appearance when scrolling past the hero (fixed product defaults). */
const SITE_HEADER = {
  transparentOnHome: true,
  /** Over hero: `dark` = ink nav/brand; `light` / `accent` also supported */
  heroText: 'dark',
  scrolledBg: 'blur',
  scrollTriggerPx: 40,
};

export default function App() {
  const [screen, setScreen] = useState('home');
  const [lang, setLang] = useState('en');
  const [tier, setTier] = useState(1);

  const nav = (s) => { setScreen(s); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const selectTier = (n) => { setTier(n); nav('book'); };
  const submit = ({ tier: t }) => { setTier(t); nav('confirm'); };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header
        current={screen === 'confirm' ? 'book' : screen}
        onNav={nav}
        lang={lang}
        onLang={setLang}
        transparent={screen === 'home' && SITE_HEADER.transparentOnHome}
        heroText={SITE_HEADER.heroText}
        scrolledBg={SITE_HEADER.scrolledBg}
        trigger={SITE_HEADER.scrollTriggerPx}
      />
      {screen === 'home' && <HomeScreen lang={lang} onBook={() => nav('book')} onSelectTier={selectTier} />}
      {screen === 'services' && <ServicesScreen lang={lang} onBook={() => nav('book')} />}
      {screen === 'book' && <BookScreen lang={lang} initialTier={tier} onSubmit={submit} />}
      {screen === 'confirm' && <ConfirmScreen lang={lang} tier={tier} onHome={() => nav('home')} />}
      <Footer lang={lang} />
    </div>
  );
}
