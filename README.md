# Bejo Gym Landing Page

Clean, scalable Next.js landing page for gym/fitness.

## Project Structure

```
bejo-landing-page/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (metadata, fonts)
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles + Tailwind
│
├── components/
│   ├── sections/                # Landing page sections (feature-based)
│   │   ├── hero.tsx             # Hero section
│   │   ├── programs.tsx         # Programs/services
│   │   ├── testimonials.tsx     # Customer testimonials
│   │   ├── pricing.tsx          # Pricing plans
│   │   ├── cta.tsx              # Call-to-action
│   │   └── bmi-calculator.tsx   # BMI calculator widget
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # Button variants
│   │   ├── whatsapp-button.tsx  # Floating WhatsApp button
│   │   └── container.tsx        # Width/spacing wrapper
│   │
│   └── layout/                  # Layout components
│       ├── header.tsx           # Navigation
│       └── footer.tsx           # Footer
│
├── lib/                         # Utilities & helpers
│   └── utils.ts                 # Helper functions
│
├── types/                       # TypeScript definitions
│   └── index.ts                 # Shared types
│
├── public/                      # Static assets
│   └── images/                  # Images, icons
│
└── styles/                      # Additional styles (if needed)
```

## Folder Explanations

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router pages & layouts |
| `components/sections/` | Feature-based sections for the landing page |
| `components/ui/` | Small, reusable UI elements |
| `components/layout/` | Header, footer, navigation |
| `lib/` | Utilities, helpers, configurations |
| `types/` | Shared TypeScript type definitions |
| `public/` | Static assets (images, fonts, etc.) |

## Best Practices

1. **Server Components by Default** - Only use `use client` when needed (interactivity)
2. **Feature-Based** - Group components by feature/section, not by type
3. **Minimal JS** - Use Tailwind for styling, avoid heavy libraries
4. **Type Safety** - Define types in `types/` and import where needed
5. **Consistent Naming** - Use kebab-case for files, PascalCase for components
6. **Lazy Loading** - Load heavy sections (BMI calculator) dynamically

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
