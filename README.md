# Iris — Under Construction

A mobile-first, production-ready temporary holding page for the Iris platform.

## Concept

**"The Door / Portal"**  
A calm, mysterious, premium, cinematic experience that hints at something extraordinary waiting beyond.

---

## Quick Start

Simply open `index.html` in a browser. No build step required.

For local development with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

---

## Project Structure

```
iris-under-construction/
├── index.html          # Main HTML file
├── styles.css          # Mobile-first stylesheet
├── assets/
│   ├── bg-mobile.jpg   # Background for mobile (9:16 portrait)
│   ├── bg-desktop.jpg  # Background for desktop (16:9 landscape)
│   └── bg-desktop@2x.jpg  # Optional 2x for retina
└── README.md
```

---

## Design System

### Colors

| Name         | Hex       | Usage                     |
|--------------|-----------|---------------------------|
| Dark Night   | `#23303D` | Primary background        |
| Warm Gold    | `#EDC967` | Accents, subline text     |
| Cognac       | `#935430` | Secondary accent          |
| Off-White    | `#EFEFEF` | Primary text              |
| Petrol       | `#395159` | Tertiary accent           |

### Typography

| Use       | Family              | Weight | Notes                     |
|-----------|---------------------|--------|---------------------------|
| Headings  | Cormorant Garamond  | 300    | Large, elegant, letter-spaced |
| Accents   | Poppins             | 300-500| UI elements, sublines     |
| Body      | Open Sans           | 300-400| Readable body text        |

### Breakpoints (Mobile-First)

| Breakpoint | Width      | Target         |
|------------|------------|----------------|
| Base       | < 768px    | Mobile (9:16)  |
| Tablet     | ≥ 768px    | Tablet         |
| Desktop    | ≥ 1024px   | Desktop (16:9) |
| Large      | ≥ 1440px   | Large desktop  |

---

## Adding Background Images

1. **Mobile (required):**  
   Add `bg-mobile.jpg` to `/assets/`  
   Recommended: 1080×1920px (9:16 aspect ratio)

2. **Desktop (optional):**  
   Add `bg-desktop.jpg` to `/assets/`  
   Recommended: 1920×1080px (16:9 aspect ratio)

3. **Retina Desktop (optional):**  
   Add `bg-desktop@2x.jpg` for high-DPI screens  
   Recommended: 3840×2160px

---

## Future Enhancements

The scaffold is prepared for:

- [ ] Portal/door visual in `.hero__portal-layer`
- [ ] Video background layer
- [ ] Smoke/particle effects
- [ ] Subtle entrance animations
- [ ] Audio ambience (optional)

---

## Technical Notes

- **Mobile-first CSS:** Base styles target mobile; desktop enhanced via `min-width` queries
- **Dynamic viewport:** Uses `100dvh` for proper mobile browser support
- **Reduced motion:** Respects `prefers-reduced-motion` user preference
- **No JavaScript:** Pure HTML/CSS for maximum performance
- **Semantic HTML:** Proper heading hierarchy and ARIA labels

---

## License

Private — Iris Project
