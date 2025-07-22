# Abass Chokor - Portfolio Website

A modern, responsive portfolio website showcasing your skills, experience, and projects as a Software Developer & ERP Consultant.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient colors and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic animations
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance and speed

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Optional: Add your images here
    ├── profile.jpg     # Your profile picture
    └── project-images/ # Project screenshots
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

1. **Hero Section** (lines 40-50):
   ```html
   <h1 class="hero-title">Your Name</h1>
   <h2 class="hero-subtitle">Your Title</h2>
   <p class="hero-description">Your description...</p>
   ```

2. **Contact Information** (lines 45-48):
   ```html
   <p>📧 Email: your.email@example.com | 📱 Phone: +123 456 7890 | 🌐 LinkedIn: linkedin.com/in/yourprofile</p>
   ```

3. **About Section** (lines 60-80):
   - Update your personal description
   - Modify statistics (years of experience, projects, languages)

### Projects
Update the projects section (lines 150-220) with your own projects:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-icon-name"></i>
        <h3>Project Name</h3>
    </div>
    <p>Project description...</p>
    <div class="project-features">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
</div>
```

### Skills
Modify the skills section (lines 230-280) to match your expertise:

```html
<div class="skill-category">
    <h3><i class="fas fa-code"></i> Programming Languages</h3>
    <div class="skill-items">
        <span class="skill-item">Your Skill 1</span>
        <span class="skill-item">Your Skill 2</span>
    </div>
</div>
```

### Experience
Update the experience timeline (lines 90-140) with your work history:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Job Title</h3>
            <span class="company">Company Name</span>
            <span class="period">2020 - Present</span>
        </div>
        <ul class="timeline-details">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
        </ul>
    </div>
</div>
```

## 🎨 Styling Customization

### Colors
The main color scheme uses a purple gradient. To change colors, edit these CSS variables in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary color */
color: #667eea;

/* You can replace with your preferred colors */
```

### Fonts
The website uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. Update the font-family in `styles.css`:
   ```css
   body {
       font-family: 'YourFont', sans-serif;
   }
   ```

## 📱 Adding Your Profile Picture

1. Add your profile picture to the `assets/` folder
2. Update the hero section in `index.html`:
   ```html
   <div class="hero-image">
       <img src="assets/your-profile.jpg" alt="Your Name" class="profile-image">
   </div>
   ```
3. Add CSS for the profile image in `styles.css`:
   ```css
   .profile-image {
       width: 300px;
       height: 300px;
       border-radius: 50%;
       object-fit: cover;
       border: 4px solid rgba(255, 255, 255, 0.2);
   }
   ```

## 🔧 Advanced Customization

### Adding New Sections
To add a new section, follow this template:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### Custom Animations
Add custom CSS animations in `styles.css`:

```css
@keyframes yourAnimation {
    from {
        /* Initial state */
    }
    to {
        /* Final state */
    }
}

.your-element {
    animation: yourAnimation 1s ease;
}
```

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS** (Recommended):
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Add your EmailJS configuration to `script.js`

2. **Formspree**:
   - Sign up at [formspree.io](https://formspree.io/)
   - Update the form action in `index.html`

3. **Custom Backend**:
   - Create your own backend API
   - Update the form submission handler in `script.js`

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop your folder to [netlify.com](https://netlify.com)
2. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

## 📊 Performance Optimization

- **Images**: Compress images using tools like TinyPNG
- **Fonts**: Use font-display: swap for better loading
- **CSS/JS**: Minify files for production
- **Caching**: Set up proper cache headers

## 🔍 SEO Optimization

1. **Meta Tags**: Update meta tags in `index.html`
2. **Open Graph**: Add social media meta tags
3. **Sitemap**: Create a sitemap.xml file
4. **Robots.txt**: Add robots.txt file

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Support

If you need help customizing your portfolio:

1. Check the comments in the code files
2. Refer to this README
3. Look up CSS/HTML documentation
4. Use browser developer tools for debugging

## 🎯 Next Steps

1. **Add your real information** to all sections
2. **Include your actual projects** with screenshots
3. **Add your profile picture**
4. **Set up the contact form** with a real backend
5. **Deploy to your preferred platform**
6. **Share your portfolio** with potential employers!

---

**Good luck with your portfolio! 🚀** 