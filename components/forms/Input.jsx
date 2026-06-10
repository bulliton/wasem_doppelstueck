export function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  hint,
  required = false,
  disabled = false,
  style: styleProp = {},
}) {
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    ...styleProp,
  };

  const labelStyle = {
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: error ? 'var(--color-vineyard-soil)' : 'var(--text-secondary)',
  };

  const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    fontWeight: 400,
    color: 'var(--text-primary)',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? 'var(--color-vineyard-soil)' : 'var(--border-default)'}`,
    padding: '10px 0',
    outline: 'none',
    width: '100%',
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    borderRadius: 0,
    transition: 'border-color 220ms ease',
  };

  const hintStyle = {
    fontSize: '0.6875rem',
    color: error ? 'var(--color-vineyard-soil)' : 'var(--text-muted)',
  };

  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return React.createElement('div', { style: wrapStyle },
    label && React.createElement('label', { htmlFor: inputId, style: labelStyle },
      label,
      required && React.createElement('span', { style: { color: 'var(--color-vineyard-soil)', marginLeft: 3 } }, '*')
    ),
    React.createElement('input', {
      id: inputId,
      type,
      placeholder,
      value,
      onChange,
      disabled,
      required,
      style: inputStyle,
    }),
    (hint || error) && React.createElement('span', { style: hintStyle }, error || hint)
  );
}
