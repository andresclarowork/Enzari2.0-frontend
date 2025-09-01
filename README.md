# Enzari Company Website

A modern, professional company website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Built-in SEO features and metadata management
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Component-Based**: Reusable, maintainable component architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Linting**: ESLint with TypeScript support
- **Code Quality**: Prettier (recommended)

## 📁 Project Structure

```
enzari-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/             # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   └── Footer.tsx     # Site footer
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx       # Hero section
│   │       ├── About.tsx      # About section
│   │       ├── Services.tsx   # Services section
│   │       └── Contact.tsx    # Contact section
│   ├── lib/                   # Utility functions
│   │   └── utils.ts           # Common utilities
│   └── types/                 # TypeScript type definitions
│       └── index.ts           # Common interfaces
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── .eslintrc.json            # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enzari-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize your brand colors
  }
}
```

### Content
- Update company information in components
- Modify navigation links in `Header.tsx`
- Customize services in `Services.tsx`
- Update contact information in `Contact.tsx`

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS variables for consistent theming

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Optimized for small screens
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured experience

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use semantic HTML elements
- Implement proper accessibility features

### Component Structure
- Keep components focused and single-purpose
- Use proper TypeScript interfaces
- Implement proper error boundaries
- Follow React best practices

### Performance
- Optimize images and assets
- Implement proper loading states
- Use Next.js Image component
- Minimize bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build command and output directory
- **AWS Amplify**: Connect repository and configure build
- **Self-hosted**: Build and serve static files

## 📊 Performance

- **Lighthouse Score**: Target 90+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Analysis**: Regular bundle size monitoring
- **Image Optimization**: WebP/AVIF formats with proper sizing

## 🔒 Security

- **HTTPS**: Enforced in production
- **Content Security Policy**: Configured headers
- **Input Validation**: Form validation and sanitization
- **Dependencies**: Regular security updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support:
- Email: info@enzari.com
- Phone: +1 (555) 123-4567
- Website: [enzari.com](https://enzari.com)

---

Built with ❤️ by the Enzari Team 