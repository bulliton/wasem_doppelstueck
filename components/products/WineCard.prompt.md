Wine product card in grid (vertical) or list (horizontal) layout. The primary product presentation unit across the shop.

```jsx
// Grid card — wine shop
<WineCard
  name="WASEM WEISS"
  vintage="2022"
  price="€ 16,00"
  image="/path/to/bottle.png"
  tags={['LEHM', 'KALK']}
  certifications={['BIO', 'VEGAN']}
  variant="grid"
  onAddToCart={() => addToCart(id)}
/>

// List card — search results, compact views
<WineCard
  name="DOPPELSTÜCK ROT"
  vintage="2021"
  price="€ 24,00"
  tags={['LEHM', 'SCHIEFER']}
  certifications={['BIO']}
  variant="list"
/>
```

Grid: vertical card with large bottle image (~220px height), hover lifts bottle image.
List: horizontal row with small bottle, name+tags, price, arrow button.
Without an image prop, renders a placeholder with the W mark.
