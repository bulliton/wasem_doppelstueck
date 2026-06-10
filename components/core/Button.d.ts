/**
 * @startingPoint section="Components" subtitle="Primary, secondary, ghost buttons with arrow icon" viewport="700x120"
 */
export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'primary-light' | 'secondary-light';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Show trailing arrow icon (default true) */
  icon?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Render as anchor tag */
  href?: string;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Additional inline styles */
  style?: React.CSSProperties;
}
