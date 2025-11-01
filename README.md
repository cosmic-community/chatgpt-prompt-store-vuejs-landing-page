# ChatGPT Prompt Store - Vue.js Landing Page

![App Preview](https://imgix.cosmicjs.com/84de0e90-b74f-11f0-ac0f-f7b89d2a648e-photo-1677442136019-21780ecad995-1762021259950.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, scroll-animated landing page built with Vue.js 3 that showcases your ChatGPT prompt engineering packages. Features smooth animations, dynamic content from Cosmic CMS, and a conversion-focused design.

## ✨ Features

- 🎬 Smooth scroll animations with Intersection Observer
- 📱 Fully responsive design that works on all devices
- 🎨 Modern gradient design with Vue green accents
- 🖼️ Optimized images using Imgix CDN
- 🔄 Dynamic content loading from Cosmic CMS
- ⚡ Lightning-fast performance with Vite
- 🎯 Featured package highlighting
- 💫 Hover effects and micro-interactions
- 🔒 TypeScript for type safety
- 📊 JSON-based feature lists

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69064ea1271316ad9f4d04c5&clone_repository=6906503b271316ad9f4d04e0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create Landing page to product introduction about sell Prompt chatgpt for prompt engineering. Landing Page Using scroll animation."

### Code Generation Prompt

> "Develop a Vue.js application that uses my existing object types and objects"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **Vite** - Next-generation frontend build tool
- **TypeScript** - Type-safe JavaScript
- **Cosmic CMS** - Headless CMS for content management
- **Tailwind CSS** - Utility-first CSS framework
- **Imgix** - Image optimization and CDN

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Bun package manager (or npm/yarn)
- A Cosmic account with bucket access

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd chatgpt-prompt-store
```

2. Install dependencies:
```bash
bun install
```

3. Create your environment variables:
```bash
cp .env.example .env
```

4. Add your Cosmic credentials to `.env`:
```env
VITE_COSMIC_BUCKET_SLUG=your-bucket-slug
VITE_COSMIC_READ_KEY=your-read-key
```

5. Start the development server:
```bash
bun run dev
```

6. Open your browser to `http://localhost:5173`

## 📚 Cosmic SDK Examples

### Fetching Landing Page Content

```typescript
import { cosmic } from './lib/cosmic'

// Get singleton landing page content
const { object: landingPage } = await cosmic.objects
  .findOne({
    type: 'landing-page',
    slug: 'prompt-engineering-landing-page'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

// Access hero content
const heroHeadline = landingPage.metadata.hero_headline
const heroImage = landingPage.metadata.hero_image.imgix_url
const features = landingPage.metadata.features
```

### Fetching Prompt Packages

```typescript
// Get all prompt packages
const { objects: packages } = await cosmic.objects
  .find({
    type: 'prompt-packages'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Find featured package
const featuredPackage = packages.find(
  pkg => pkg.metadata.featured_package === true
)

// Access package details
packages.forEach(pkg => {
  console.log(pkg.metadata.package_name)
  console.log(pkg.metadata.price)
  console.log(pkg.metadata.features_list)
})
```

## 🌐 Cosmic CMS Integration

This application uses the following Cosmic object types:

### Landing Page (Singleton)
- Hero headline and subheadline
- Hero image
- CTA button text
- Features section with icons and descriptions
- Benefits section
- Testimonial quote and author
- Final CTA section

### Prompt Packages
- Package name and description
- Price
- Package image
- Features list (JSON array)
- Featured package flag

All content is managed through your Cosmic dashboard at https://app.cosmicjs.com

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `VITE_COSMIC_BUCKET_SLUG`
   - `VITE_COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 🎨 Customization

### Styling
All styles are managed through Tailwind CSS. Customize colors and design in:
- `tailwind.config.js` - Theme configuration
- Component `<style>` blocks - Component-specific styles

### Content
All content is managed through Cosmic CMS. Update content in your Cosmic dashboard and it will automatically reflect on your site.

### Animations
Scroll animations are configured in the `useScrollAnimation` composable. Adjust thresholds and animation classes to customize the animation behavior.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For issues or questions:
- Check the Cosmic documentation: https://www.cosmicjs.com/docs
- Review Vue.js documentation: https://vuejs.org
- Open an issue in this repository

<!-- README_END -->