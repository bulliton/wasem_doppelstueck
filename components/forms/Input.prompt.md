Minimal bottom-border text field. All forms use this style — no box-border inputs.

```jsx
<Input label="E-Mail" type="email" placeholder="ihre@email.de" required />
<Input label="Vorname" placeholder="Maria" />
<Input label="Gutscheincode" error="Ungültiger Code" value="INVALID" />
<Input label="Notiz" hint="Optional" placeholder="Besondere Wünsche..." />
```

Always use a label. Error state turns field accent to Vineyard Soil brown. Required fields get a small `*` marker.
