# Kiku - Landing Page

A modern Next.js landing page for the Kiku language learning app. Features a clean, responsive design that showcases the app's core functionality of transcribing social media videos for multi-language learning.

## 🚀 Features

- **Modern Design**: Clean, purple gradient UI matching Kiku app branding
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Deep Linking**: Preserves existing `.well-known/apple-app-site-association` for app store links
- **Multi-language Focus**: Showcases support for multiple languages, not just Japanese
- **Fast Loading**: Optimized with Next.js static export

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment platform

## 📱 About Kiku

Kiku is a mobile app that transforms social media videos into language learning opportunities by:
- Transcribing audio in multiple languages using OpenAI Whisper
- Providing English translations via GPT-4o
- Generating vocabulary flashcards with native pronunciations
- Supporting TikTok, Instagram, YouTube, and other platforms
- Offering an intuitive mobile interface

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

This site is configured for Vercel deployment with static export:

```bash
# Build and export static files
npm run build
```

The site will be exported to the `out/` directory and can be deployed to any static hosting service.

### Vercel Deployment

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and use the settings from `vercel.json`
3. The site will be deployed with proper routing and headers for the app association file

## 🔗 Deep Linking

The site preserves the existing deep linking setup for the Kiku mobile app:
- **Bundle ID**: `com.nums11.Kiku`
- **App Store Connect Team**: `3R8LB5L48S`
- **Associated Paths**: `/ul/*`

## 🎨 Customization

### Colors
The site uses the official Kiku purple color scheme (`#6E3FAD`) that can be customized in `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#6E3FAD', // Main Kiku purple
    // Other purple shades
  },
  kiku: {
    500: '#6E3FAD', // Brand color
    // Related shades
  }
}
```

### Content
Main content can be updated in `app/page.tsx`. The site includes:
- Hero section with Kiku logo and app description
- Multi-language example text (Japanese, Spanish, French)
- "Coming soon" messaging for iOS and Android
- Platform support information (TikTok, Instagram, YouTube, etc.)

## 📊 Analytics

To add analytics, integrate your preferred service (Google Analytics, Vercel Analytics, etc.) in the `layout.tsx` file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Kiku app ecosystem. See the main repository for licensing information.
