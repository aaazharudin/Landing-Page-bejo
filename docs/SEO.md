# SEO Guide - Gym Landing Page (Indonesia)

## Metadata Configuration

Updated `app/layout.tsx` with comprehensive SEO metadata:

### Basic Metadata
- **Title**: Bejo Gym - Gym Premium Jakarta | Personal Trainer & Program Fitness
- **Description**: Gym premium di Jakarta dengan personal trainer bersertifikat
- **Keywords**: Gym-related keywords for Indonesian market

### Social Media Tags
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- OG Image: 1200x630px

### Structured Data (JSON-LD)
- LocalBusiness schema
- SportsActivityLocation type
- Rating and review data
- Opening hours
- Location data

---

## Target Keywords - Indonesia Gym Niche

### Primary Keywords (High Volume)
| Keyword | Search Volume | Difficulty |
|---------|--------------|------------|
| gym jakarta | High | Medium |
| gym terdekat | High | High |
| personal trainer jakarta | Medium | Low |
| tempat fitness | High | Medium |
| gym murah | High | High |

### Secondary Keywords (Target Long-tail)
| Keyword | Intent |
|---------|--------|
| gym premium jakarta selatan | Commercial |
| personal trainer profesional | Commercial |
| penurunan berat badan program | Informational |
| pembentukan otot gym | Informational |
| gym 24 jam jakarta | Commercial |
| fitness center jakarta | Commercial |
| personal trainer untuk pemula | Informational |
| program fitness 3 bulan | Informational |

### Local Keywords (Location-based)
- gym jakarta selatan
- gym jakarta pusat
- gym jakarta barat
- gym jakarta timur
- gym jakarta utara
- gym bekasi
- gym tangerang

### Question-based Keywords (Voice Search)
- berapa harga gym per bulan
- cara menurunkan berat badan di gym
- gym bagus untuk pemula
- personal trainer berapa per sesi

---

## Heading Structure

The landing page follows proper semantic HTML hierarchy:

```html
<h1>Transformasi Tubuhmu Dalam 90 Hari</h1>
  │
  ├── <h2>Kenapa Bejo Gym?</h2>
  │     └── <h3>Personal Trainer Bersertifikat</h3>
  │     └── <h3>Program Terukur & Personalized</h3>
  │     └── <h3>Fasilitas Premium & Bersih</h3>
  │
  ├── <h2>Pilihan Program</h2>
  │     └── <h3>Penurunan Berat Badan</h3>
  │     └── <h3>Pembentukan Otot</h3>
  │     └── <h3>Personal Trainer</h3>
  │
  ├── <h2>Hasil Nyata</h2>
  │
  ├── <h2>Kata Member Kami</h2>
  │
  ├── <h2>Pilih Paketmu</h2>
  │
  └── <h2>Siap Transformasi Tubuhmu?</h2>
```

**SEO Benefits:**
- Single H1 per page (primary keyword)
- Logical heading hierarchy
- Keywords naturally distributed in headings
- Screen reader friendly

---

## Semantic HTML Elements Used

| Element | Usage | SEO Benefit |
|---------|-------|-------------|
| `<main>` | Main content wrapper | Defines primary content |
| `<section>` | Each landing page section | Semantic structure |
| `<nav>` | Navigation links | Helps crawlers navigate |
| `<h1>` - `<h6>` | Heading hierarchy | Content structure |
| `<article>` | Testimonials | Independent content |
| `<a>` | Internal links | Link equity distribution |
| `<img>` | Images with alt text | Image search optimization |

---

## On-Page SEO Checklist

### ✅ Completed
- [x] Proper title tag (60 characters)
- [x] Meta description (150-160 characters)
- [x] H1 tag with primary keyword
- [x] Proper heading hierarchy (H1-H3)
- [x] Semantic HTML structure
- [x] Alt text for images (when added)
- [x] Internal linking (anchor links)
- [x] Mobile-responsive design
- [x] Fast loading (optimized)
- [x] HTTPS enabled
- [x] Structured data (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Card tags

### 📋 To-Do (Before Launch)
- [ ] Add actual images with proper alt text
- [ ] Create and upload OG image (1200x630px)
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Add canonical tags (if needed)
- [ ] Generate Google verification code

---

## Content Optimization Tips

### Keyword Density
- Aim for 1-2% keyword density
- Use keywords naturally in:
  - Headings
  - First paragraph
  - Image alt text
  - Meta description
  - URL slugs

### Content Quality
- Write for users, not search engines
- Use clear, concise language
- Include local references (Jakarta)
- Add social proof (testimonials, results)
- Update content regularly

### Internal Linking
```tsx
// Good internal linking
<Link href="/programs">Program Lengkap</Link>
<Link href="/pricing">Harga Membership</Link>
<a href="#testimonials">Testimoni Member</a>
```

---

## Local SEO Strategy

### Google Business Profile
1. Claim/verify business listing
2. Add accurate NAP (Name, Address, Phone)
3. Upload photos (facility, trainers, results)
4. Collect reviews from members
5. Post updates regularly

### Local Citations
- Google Maps
- Tokopedia (if selling memberships)
- Traveloka (if applicable)
- Local business directories

### Review Strategy
- Encourage satisfied members to review
- Respond to all reviews (positive & negative)
- Aim for 4.5+ average rating
- Target 100+ reviews

---

## Technical SEO

### Sitemap.xml
Create `app/sitemap.ts`:
```tsx
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bejogym.id',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

### Robots.txt
Create `public/robots.txt`:
```txt
User-agent: *
Allow: /
Sitemap: https://bejogym.id/sitemap.xml
```

---

## Performance & SEO

| Metric | Target | Impact |
|--------|--------|--------|
| Page Speed | < 3s | Direct ranking factor |
| Mobile Score | > 90 | Mobile-first indexing |
| Core Web Vitals | Pass | User experience signals |
| HTTPS | Enabled | Trust & ranking factor |

---

## Measuring SEO Success

### Tools
1. **Google Search Console** - Monitor performance
2. **Google Analytics** - Track traffic & conversions
3. **Ahrefs/SEMrush** - Keyword research & backlinks
4. **PageSpeed Insights** - Performance monitoring

### Key Metrics
- Organic traffic growth
- Keyword rankings
- Click-through rate (CTR)
- Conversion rate
- Bounce rate
- Time on page

---

## Next Steps

1. **Immediate** (Before Launch)
   - Add actual images with alt text
   - Create OG image
   - Set up Google Search Console
   - Generate sitemap

2. **Short-term** (First Month)
   - Publish blog content (fitness tips)
   - Build local citations
   - Collect Google reviews
   - Monitor Search Console

3. **Long-term** (Ongoing)
   - Regular content updates
   - Link building outreach
   - Technical SEO audits
   - Competitor analysis
