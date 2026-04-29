const branches = [
  {
    key: 'arhitektura',
    title: 'Arhitektura',
    position: 'bottom-left',
    symbol: 'A',
  },
  {
    key: 'alternativa',
    title: 'Alternativa',
    position: 'bottom-center',
    symbol: 'A',
  },
  {
    key: 'alhemija',
    title: 'Alhemija',
    position: 'bottom-right',
    symbol: 'A',
  },
]

function LandingGreeting({ onSelectBranch }) {
  const handleSelectBranch = (branchKey) => {
    if (onSelectBranch) {
      onSelectBranch(branchKey)
      return
    }

    console.log('Selected branch:', branchKey)
  }

  return (
    <section className="landing-greeting" aria-label="Unijaprojekt landing ekran">
      <div className="landing-greeting__language" aria-label="Izbor jezika">
        <button className="landing-greeting__language-button landing-greeting__language-button--active" type="button">
          SR
        </button>
        <span className="landing-greeting__language-separator">·</span>
        <button className="landing-greeting__language-button" type="button">
          EN
        </button>
      </div>

      <header className="landing-greeting__intro">
        <p className="landing-greeting__kicker">
          Unijaprojekt · Est. 1990 · Mali Zvornik
        </p>

        <h1 className="landing-greeting__statement">
          Osnovan od strane bračnog para Gorana i Dragice Mišić, mojih roditelja.
        </h1>

        <p className="landing-greeting__keywords">
          Projektovanje · Oblikovanje · Transformacija
        </p>
      </header>

      <div className="landing-greeting__stage" aria-label="Unijaprojekt sistem pravaca">
        <button
          className="landing-greeting__mark landing-greeting__mark--main"
          type="button"
          aria-label="Unijaprojekt"
          onClick={() => handleSelectBranch('unijaprojekt')}
        >
          <span className="landing-greeting__seal">
            <span className="landing-greeting__seal-ring landing-greeting__seal-ring--outer" />
            <span className="landing-greeting__seal-ring landing-greeting__seal-ring--inner" />
            <span className="landing-greeting__seal-dot landing-greeting__seal-dot--left" />
            <span className="landing-greeting__seal-dot landing-greeting__seal-dot--right" />
            <span className="landing-greeting__seal-dot landing-greeting__seal-dot--bottom" />
            <span className="landing-greeting__main-symbol">U</span>
            <span className="landing-greeting__seal-label">Unijaprojekt</span>
          </span>
        </button>

        {branches.map((branch) => (
          <button
            key={branch.key}
            className={`landing-greeting__mark landing-greeting__mark--${branch.position}`}
            type="button"
            aria-label={branch.title}
            onClick={() => handleSelectBranch(branch.key)}
          >
            <span className="landing-greeting__seal">
              <span className="landing-greeting__seal-ring landing-greeting__seal-ring--outer" />
              <span className="landing-greeting__seal-ring landing-greeting__seal-ring--inner" />
              <span className="landing-greeting__seal-dot landing-greeting__seal-dot--left" />
              <span className="landing-greeting__seal-dot landing-greeting__seal-dot--right" />
              <span className="landing-greeting__seal-dot landing-greeting__seal-dot--bottom" />
              <span className="landing-greeting__branch-title">{branch.title}</span>
              <span className="landing-greeting__branch-symbol">{branch.symbol}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default LandingGreeting