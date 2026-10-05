import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const BG_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'

const PORTRAIT_URL =
  'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png'

const NAV = ['Story', 'Jobs', 'Message'] as const
const SOCIAL = ['Instagram', 'TikTok', 'YouTube'] as const

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* BG image */}
      <img
        src={BG_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      {/* Marquee */}
      <div
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
        </div>
      </div>

      {/* Cream rule */}
      <div className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line" />

      {/* Front portrait */}
      <img
        src={PORTRAIT_URL}
        alt="Portrait"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover anim-rise-in"
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="font-hn text-lg tracking-wide text-cream anim-fade-up"
          style={{ animationDelay: '800ms' }}
        >
          Marcus
        </a>

        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          <span
            className="text-sm text-cream anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-0.5 text-sm">
            {SOCIAL.map((item, i) => (
              <a
                key={item}
                href="#"
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden relative z-50 flex h-10 w-10 items-center justify-center anim-fade-up"
          style={{ animationDelay: '900ms' }}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-cream transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1.5px] w-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open ? 'bottom-auto top-1/2 -translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </header>

      {/* Desktop footer */}
      <footer className="absolute inset-x-0 bottom-0 z-10 hidden sm:flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn">
        <div
          className="text-cream anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <p>Visuals Composer</p>
          <p>Digital Crafter</p>
          <p>Obsessed by The Office</p>
        </div>
        <div
          className="text-right text-cream anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <p>A homage to</p>
          <p>Marcus Holloway</p>
        </div>
      </footer>

      {/* Mobile footer (visible on small, under chrome) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex sm:hidden items-end justify-between px-6 pb-5 text-xs leading-relaxed font-hn">
        <div
          className="text-cream anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <p>Visuals Composer</p>
          <p>Digital Crafter</p>
          <p>Obsessed by The Office</p>
        </div>
        <div
          className="text-right text-cream anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <p>A homage to</p>
          <p>Marcus Holloway</p>
        </div>
      </footer>

      {/* Mobile drawer */}
      <div className="sm:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />

        {/* Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-40 flex w-[80%] max-w-sm flex-col bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className={`absolute right-6 top-6 text-cream transition-all duration-300 ${
              open
                ? 'rotate-0 opacity-100 delay-300'
                : 'rotate-90 opacity-0'
            }`}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <div className="mt-12 flex flex-col gap-10">
            <div>
              <p
                className={`mb-6 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                  open
                    ? 'translate-y-0 opacity-100 delay-[250ms]'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                Site Index
              </p>
              <nav className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-4xl text-cream transition-all duration-500 ${
                      open
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-6 opacity-0'
                    }`}
                    style={{
                      transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p
                className={`mb-4 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                  open
                    ? 'translate-y-0 opacity-100 delay-500'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                Find Me
              </p>
              <nav className="flex flex-wrap gap-x-4 gap-y-2">
                {SOCIAL.map((item, i) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-sm text-cream transition-all duration-500 ${
                      open
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
