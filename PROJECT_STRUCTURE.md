# Portfolio Project Structure

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── CV_Nguyen_Hoang_Anh.pdf
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with active section tracking
│   │   ├── Hero.jsx            # Hero section with staggered animations
│   │   ├── About.jsx           # About section with bio and stats
│   │   ├── Projects.jsx        # Engineering case study cards
│   │   ├── TechStack.jsx       # Tech stack grid with icons
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Contact.jsx         # Contact form and social links
│   │   └── Footer.jsx          # Simple footer
│   ├── constants/
│   │   └── data.js             # All content data (easy to update)
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML template with fonts
└── package.json                # Dependencies

```

## 🎨 Tech Stack

- **React 19** + **Vite** - Core framework and build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **react-intersection-observer** - Scroll-triggered animations
- **react-icons** - Icon library
- **clsx** - Conditional className utility

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Updating Content

All content is centralized in `src/constants/data.js`. Update this file to change:
- Personal information
- Projects
- Tech stack
- Education details
- Contact information

## 🎯 Key Features

- ✅ Dark theme (#0D1117 background)
- ✅ Gradient accent colors (#3B82F6 → #6366F1)
- ✅ Smooth scroll navigation
- ✅ Scroll-triggered animations
- ✅ Fully responsive (mobile-first)
- ✅ Engineering-focused project presentation
- ✅ No screenshots - content over visuals
- ✅ Custom scrollbar
- ✅ Sticky navbar with active section highlighting
- ✅ Terminal-style elements
- ✅ Hover effects on interactive elements

## 🎬 Animation Details

- Hero section: Staggered text reveal
- Sections: Fade + slide up on scroll into viewport
- Project cards: Hover glow + scale
- Tech items: Scale + lift on hover
- Buttons: Background shift + scale on hover

## 📱 Responsive Breakpoints

- Mobile: < 768px (stack layout)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Colors
Update gradient colors in components or add to Tailwind config:
- Primary: `#3B82F6`
- Secondary: `#6366F1`
- Background: `#0D1117`
- Alt Background: `#0F0F0F`

### Fonts
- Body: Inter (Google Fonts)
- Code: JetBrains Mono (Google Fonts)

### Icons
Tech stack icons use devicons CDN. Fallback to plain icons if original not found.

## 📦 Production Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

```bash
npm run build
# Deploy the 'dist' folder
```
