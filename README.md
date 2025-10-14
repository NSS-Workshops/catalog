# Professional Development Workshop Catalog

An interactive workshop catalog built with Astro and React, designed for software development training organizations to help developers at all career stages identify and pursue relevant professional development opportunities.

## 🚀 Features

- **Interactive Filtering**: Filter workshops by career track (AI Engineering, Full-Stack Development, DevOps, Technical Leadership)
- **Individual Workshop Pages**: Each workshop has its own detailed page with comprehensive information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Built with Radix CSS for clean, accessible design
- **Static Site Generation**: Fast loading times with Astro's static site generation
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) with React islands
- **Styling**: [Radix CSS](https://www.radix-ui.com/colors) with custom CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages via GitHub Actions
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   └── WorkshopCatalog.tsx
│   ├── data/             # Workshop data and types
│   │   └── workshops.ts
│   ├── layouts/          # Astro layouts
│   │   └── Layout.astro
│   ├── pages/            # Astro pages (file-based routing)
│   │   ├── index.astro   # Homepage with catalog
│   │   └── workshops/
│   │       └── [slug].astro  # Dynamic workshop detail pages
│   └── styles/           # Global styles
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
├── astro.config.mjs      # Astro configuration
├── package.json
└── tsconfig.json
```

## 🎨 Customization

### Adding New Workshops

1. Open `src/data/workshops.ts`
2. Add your workshop to the appropriate category in the `workshops` array
3. Ensure you include all required fields:
   - `title`: Workshop name
   - `duration`: Time commitment (e.g., "2 days")
   - `level`: "Beginner", "Intermediate", or "Advanced"
   - `tracks`: Array of track keys (e.g., ["ai", "fullstack"])
   - `description`: Brief description
   - `outcomes`: Array of learning outcomes
   - `prerequisites`: Required experience
   - `slug`: URL-friendly identifier

### Modifying Styles

The project uses Radix CSS with custom CSS variables. Main styles are in:
- `src/styles/global.css` - Global styles and utilities
- Individual components use inline styles with CSS custom properties

### Adding New Career Tracks

1. Update the `tracks` object in `src/data/workshops.ts`
2. Add corresponding CSS classes in `src/styles/global.css`
3. Update the color scheme as needed

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Update Configuration**
   - Edit `astro.config.mjs`
   - Update `site` to your GitHub Pages URL
   - Update `base` to your repository name (if not using a custom domain)

3. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The GitHub Action will automatically build and deploy your site.

### Manual Deployment

```bash
# Build the site
npm run build

# Preview the build locally
npm run preview

# Deploy the dist/ folder to your hosting provider
```

## 🔧 Development Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Career Tracks

The catalog includes five specialized career tracks:

1. **Career Starter** - Foundation skills for new developers
2. **AI Engineering** - Building intelligent applications with AI/ML
3. **Full-Stack Development** - Complete web application development
4. **DevOps & Infrastructure** - Deployment and system operations
5. **Technical Leadership** - Leading teams and technical initiatives

## 📖 Workshop Structure

Each workshop follows a consistent format:
- **Duration**: 1-3 days to maintain focus
- **Level**: Clearly marked difficulty
- **Prerequisites**: Explicit requirements
- **Learning Outcomes**: 3-5 specific skills gained
- **Hands-On Projects**: Real-world applications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For questions about implementing this workshop catalog structure or developing specific workshop curriculum, please open an issue or reach out to the development team.

---

**Last Updated**: October 2025
**Version**: 1.0
**Maintained By**: Curriculum Development Team