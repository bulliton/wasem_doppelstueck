export interface InputProps {
  /** Field label shown above input */
  label?: string;
  /** Input id (auto-derived from label if omitted) */
  id?: string;
  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'search';
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error message — replaces hint and turns field red-brown */
  error?: string;
  /** Helper hint text */
  hint?: string;
  /** Required marker */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional inline styles on wrapper */
  style?: React.CSSProperties;
}
