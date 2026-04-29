function LogoMark({
  name,
  label,
  basePath,
  className = '',
  onClick,
  disabled = false,
}) {
  const handleClick = () => {
    if (disabled) return

    if (onClick) {
      onClick(name)
    }
  }

  return (
    <button
      className={`greeting-logo ${className}`}
      type="button"
      aria-label={label}
      onClick={handleClick}
      disabled={disabled}
    >
      <img
        className="greeting-logo__part greeting-logo__part--symbol"
        src={`${basePath}/1.svg`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />

      <img
        className="greeting-logo__part greeting-logo__part--text"
        src={`${basePath}/2.svg`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />

      <img
        className="greeting-logo__part greeting-logo__part--circles"
        src={`${basePath}/3.svg`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />
    </button>
  )
}

export default LogoMark