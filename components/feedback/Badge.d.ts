export interface BadgeProps {
  /** Badge label — typically 2–3 word abbreviation (BIO, VEGAN) */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'default' | 'bio' | 'vegan' | 'organic' | 'gold';
  /** Size of the circular badge */
  size?: 'sm' | 'md' | 'lg';
  /** Additional inline styles */
  style?: React.CSSProperties;
}
