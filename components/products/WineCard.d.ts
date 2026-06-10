/**
 * @startingPoint section="Components" subtitle="Wine product card in grid and list layouts" viewport="700x340"
 */
export interface WineCardProps {
  /** Wine name in all-caps — e.g. WASEM WEISS */
  name?: string;
  /** Vintage year */
  vintage?: string;
  /** Formatted price string — e.g. € 16,00 */
  price?: string;
  /** Bottle image URL */
  image?: string;
  /** Terroir attribute tags — e.g. ['LEHM', 'KALK'] */
  tags?: string[];
  /** Certification tags — e.g. ['BIO', 'VEGAN'] */
  certifications?: string[];
  /** Layout variant */
  variant?: 'grid' | 'list';
  /** Add to cart handler */
  onAddToCart?: () => void;
  /** Card click handler — navigates to product detail */
  onClick?: () => void;
  /** Link href */
  href?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
