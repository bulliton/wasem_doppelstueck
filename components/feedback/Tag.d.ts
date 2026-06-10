export interface TagProps {
  /** Tag label — terroir attribute, category, or vintage */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'soil' | 'green' | 'filled' | 'muted';
  /** Size */
  size?: 'xs' | 'sm' | 'md';
  /** Additional inline styles */
  style?: React.CSSProperties;
}
