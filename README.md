# seby0x.dev

Personal security research and CTF writeup website.

## Structure

- `index.html` - Homepage with hero, latest writeups, projects, and tools
- `ctf.html` - CTF writeups page with platform and difficulty filters
- `research.html` - Security research findings with severity filters
- `about.html` - About page with bio, skills, and contact links
- `ctf/[name].html` - Individual CTF writeup pages
- `research/[name].html` - Individual research writeup pages
- `css/styles.css` - Global styles with dark modern design

## Design

- **Background**: #0d1117
- **Card surface**: #161b22
- **Accent (cyan)**: #00c8ff
- **High severity**: #f85149
- **Solved/Low**: #3fb950

### Typography

- **Display**: Space Grotesk (headlines, nav, brand)
- **Body**: Inter (paragraphs, descriptions)
- **Code**: JetBrains Mono (code blocks, commands)

## Deployment

### Netlify

1. Push this repository to GitHub
2. Connect to Netlify via GitHub integration
3. Netlify will automatically deploy the site
4. Configure custom domain: seby0x.dev

### Manual Deployment

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your site will be live instantly

## Adding New Writeups

### CTF Writeup

1. Copy `ctf/example-ctf.html` to `ctf/[name].html`
2. Update the content with your writeup
3. Add a link to the new writeup in `ctf.html` and `index.html`

### Research Writeup

1. Copy `research/example-vuln.html` to `research/[name].html`
2. Update the content with your research
3. Add a link to the new writeup in `research.html` and `index.html`

## Customization

- Update contact links in `about.html`
- Modify tools and skills in `index.html` and `about.html`
- Adjust color palette in `css/styles.css` CSS variables
- Add your own writeups using the provided templates
