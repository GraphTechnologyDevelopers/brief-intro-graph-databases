---
title: Getting Started
---

# Getting Started

This guide will help you set up and customize this GitHub Pages template for your own educational resources.

## Repository Setup

1. **Clone or Fork**: Start by cloning this repository or creating a new repository from this template.

2. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on push to `main`

3. **Update Configuration**: Edit `_config.yml` with your details:
   ```yaml
   title: Your Site Title
   description: Your site description
   url: https://yourusername.github.io
   baseurl: /your-repo-name
   ```

## Content Structure

- **Root files**: `index.md` and other `.md` files become pages automatically
- **Pages directory**: Organize content in `pages/` subdirectory
- **Assets**: Place images, PDFs, etc. in `assets/` directory

## Customization

### Styling

Edit `assets/css/styles.css` to customize colors, fonts, and layout. The theme uses CSS variables for easy customization:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-link: #0066cc;
  /* ... more variables */
}
```

### Footer Links

Update `_includes/footer.html` to change or add footer links.

### Layouts

Modify `_layouts/default.html` or `_layouts/page.html` to change the page structure.

## Writing Content

### Markdown Basics

Use standard Markdown syntax:

- **Bold** and *italic* text
- Links: [text](url)
- Lists (ordered and unordered)
- Tables
- Blockquotes

### Code Blocks

Use triple backticks with language identifiers:

````markdown
```python
# Python code
def example():
    pass
```
````

### Diagrams

Use Mermaid syntax in code blocks:

````markdown
```mermaid
graph LR
    A --> B
    B --> C
```
````

### Images

Place images in `assets/images/` and reference them:

```markdown
![Alt text](/assets/images/example.png)
```

## SEO Optimization

This template includes:

- Meta tags via `jekyll-seo-tag`
- Sitemap generation via `jekyll-sitemap`
- Semantic HTML structure
- Open Graph and Twitter Card support

Add page-specific SEO in front matter:

```yaml
---
title: Page Title
description: Page description for SEO
keywords: keyword1, keyword2, keyword3
---
```

## Deployment

The GitHub Actions workflow automatically:

1. Builds the Jekyll site on push to `main`
2. Deploys to GitHub Pages
3. Handles dependencies and caching

No manual deployment steps needed!

## Troubleshooting

- **Build errors**: Check GitHub Actions logs for details
- **Missing pages**: Ensure files have front matter with `title`
- **Styling issues**: Verify CSS file paths in `_includes/head.html`
- **Local testing**: Run `bundle install && bundle exec jekyll serve` (requires Ruby/Jekyll)

## Support

For issues or questions:

- Open an issue in this repository
- Visit [Graph Technology Developers](https://graphtech.dev/)
- Join the [X community](https://x.com/i/communities/1977449294861881612)

