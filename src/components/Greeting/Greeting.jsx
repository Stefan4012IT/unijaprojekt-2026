import LogoMark from '../LogoMark/LogoMark'

const LOGO_BASE = '/assets/img/logoes'

const logos = [
  {
    key: 'unijaprojekt',
    label: 'Unijaprojekt',
    basePath: `${LOGO_BASE}/unijaprojekt`,
    className: 'greeting-logo--unijaprojekt',
  },
  {
    key: 'arhitektura',
    label: 'Arhitektura',
    basePath: `${LOGO_BASE}/arhitektura`,
    className: 'greeting-logo--arhitektura',
  },
  {
    key: 'alternativa',
    label: 'Alternativa',
    basePath: `${LOGO_BASE}/alternativa`,
    className: 'greeting-logo--alternativa',
  },
  {
    key: 'alhemija',
    label: 'Alhemija',
    basePath: `${LOGO_BASE}/alhemija`,
    className: 'greeting-logo--alhemija',
  },
]

function Greeting() {
  const handleLogoClick = (logoKey) => {
    console.log('Clicked logo:', logoKey)
  }

  return (
    <section className="greeting" aria-label="Unijaprojekt landing intro">
      <div className="greeting__language" aria-label="Izbor jezika">
        <button className="greeting__language-button is-active" type="button">
          SR
        </button>

        <span className="greeting__language-separator">·</span>

        <button className="greeting__language-button" type="button">
          EN
        </button>
      </div>

      <header className="greeting__intro">
        <p className="greeting__meta">
          UNIJAPROJEKT · EST. 1990 · MALI ZVORNIK
        </p>

        <h1 className="greeting__title">
          Osnovan od strane bračnog para Gorana i Dragice Mišić, mojih roditelja.
        </h1>

        <p className="greeting__subtitle">
          PROJEKTOVANJE · OBLIKOVANJE · TRANSFORMACIJA
        </p>
      </header>

      <div className="greeting__stage">
        {logos.map((logo) => (
          <LogoMark
            key={logo.key}
            name={logo.key}
            label={logo.label}
            basePath={logo.basePath}
            className={logo.className}
            onClick={handleLogoClick}
          />
        ))}
      </div>
    </section>
  )
}

export default Greeting