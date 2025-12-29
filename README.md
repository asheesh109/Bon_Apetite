
# Bon Apetitie 🍽️

A modern, responsive restaurant website with elegant design and interactive features. Perfect for showcasing restaurant menus, services, and contact information with a beautiful user interface.

![Bon Apetitie Preview](https://img.shields.io/badge/status-live-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)

🌐 **Live Demo:** [https://asheesh109.github.io/Bon_Apetite/](https://asheesh109.github.io/Bon_Apetite/)

## ✨ Features

- **🎨 Modern Design**: Clean and appetizing color scheme perfect for food businesses
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Lightweight static website with minimal dependencies
- **🍽️ Interactive Menu**: Showcase food items with attractive presentation
- **📍 Contact Form**: User-friendly contact section for reservations and inquiries
- **📸 Gallery Section**: Visual showcase of restaurant ambiance and dishes
- **📍 Location Integration**: Easy-to-find restaurant location
- **📞 Contact Information**: Clear display of phone, email, and hours
- **🔍 SEO Optimized**: Proper HTML semantics and meta tags
- **🎭 Smooth Animations**: CSS transitions and hover effects for better UX

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript** | Interactive features and form handling |
| **GitHub Pages** | Free hosting and deployment |
| **Font Awesome** | Icons for UI elements |
| **Google Fonts** | Typography for better readability |

## 📁 Project Structure

```
Bon_Apetite/
│
├── assets/
│   ├── images/          # All website images
│   │   ├── hero/        # Hero section images
│   │   ├── menu/        # Food item images
│   │   ├── gallery/     # Restaurant gallery
│   │   └── icons/       # SVG icons and logos
│   └── fonts/           # Custom fonts (if any)
│
├── css/
│   ├── style.css        # Main stylesheet
│   ├── responsive.css   # Responsive styles
│   └── animations.css   # CSS animations
│
├── js/
│   ├── main.js          # Main JavaScript file
│   ├── menu.js          # Menu functionality
│   ├── form.js          # Contact form handling
│   └── gallery.js       # Image gallery slider
│
├── index.html           # Main homepage
├── menu.html            # Full menu page (optional)
├── about.html           # About us page (optional)
├── contact.html         # Contact page (optional)
│
├── README.md            # Project documentation
├── LICENSE              # MIT License
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asheesh109/Bon_Apetite.git
   cd Bon_Apetite
   ```

2. **Open the project**
   - Open `index.html` directly in your browser
   - Or use a local development server

### Using a Local Server (Recommended)

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js**
```bash
# Install serve globally
npm install -g serve

# Serve the directory
serve .
```

3. **Visit `http://localhost:8000`** in your browser

## 🎨 Customization

### 1. Update Restaurant Information
Edit `index.html` to change:
- Restaurant name and tagline
- Contact details (phone, email, address)
- Opening hours
- Social media links

### 2. Modify Menu Items
Update the menu section in `index.html`:
```html
<div class="menu-item">
    <img src="assets/images/menu/dish-name.jpg" alt="Dish Name">
    <h3>Dish Name</h3>
    <p>Description of the dish</p>
    <span class="price">$XX.XX</span>
</div>
```

### 3. Change Colors and Styles
Edit `css/style.css` to modify:
- Color scheme
- Fonts and typography
- Spacing and layout
- Animations

### 4. Update Images
Replace images in `assets/images/` directory:
- `hero/` - Main banner images
- `menu/` - Food item photos
- `gallery/` - Restaurant interior/ambiance

### 5. Configure Contact Form
If using a functional contact form, update form settings in `js/form.js`:
```javascript
// Update form submission endpoint
const FORM_ENDPOINT = 'your-form-endpoint-here';
```

## 📦 Deployment

### Deploy to GitHub Pages (Current Method)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main branch**
   - Select **/(root)** folder
   - Click **Save**

3. **Your site is live!**
   - Visit `https://asheesh109.github.io/Bon_Apetite/`
   - It may take a few minutes for changes to propagate

### Alternative Deployment Options

**Netlify:**
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository

**Vercel:**
1. Import your GitHub repository
2. Configure as static site

**Traditional Hosting:**
1. Upload all files via FTP to your hosting provider
2. Ensure `.htaccess` is configured (if using Apache)

## 🔧 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 60+ | ✅ Fully supported |
| Firefox 55+ | ✅ Fully supported |
| Safari 11+ | ✅ Fully supported |
| Edge 79+ | ✅ Fully supported |
| iOS Safari | ✅ Fully supported |
| Chrome Android | ✅ Fully supported |

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 992px) { /* Desktops */ }
@media (min-width: 1200px) { /* Large desktops */ }
```

## 🧪 Testing

1. **Cross-browser Testing**
   - Test on Chrome, Firefox, Safari, Edge
   - Test on mobile devices (iOS & Android)

2. **Responsive Testing**
   - Use Chrome DevTools device emulation
   - Test on actual mobile devices

3. **Performance Testing**
   - Use Google PageSpeed Insights
   - Use Lighthouse in Chrome DevTools

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Suggested Improvements
- Add a reservation system
- Implement online ordering
- Add more interactive animations
- Create admin panel for menu updates
- Add multilingual support

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) (please use your own or properly licensed images)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspiration from modern restaurant websites

**Project Developer:**
- GitHub: [@asheesh109](https://github.com/asheesh109)
- Portfolio: https://devfolio-two-xi.vercel.app/
- Email: ashishparab03@gmail.com

## ⭐ Show Your Support

If you find this project useful, please give it a star ⭐ on GitHub!

---

**Bon appétit!** 🍷✨  
*Built with ❤️ for food lovers everywhere*



The structure assumes common restaurant website features. If your project has different pages or features, you can adjust the file structure accordingly.
