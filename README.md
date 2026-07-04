# seby0x.dev

A personal portfolio website showcasing security research, CTF writeups, and vulnerability disclosures. This site serves as a central hub for documenting my journey in cybersecurity, sharing detailed solutions to CTF challenges, and publishing findings from security research.

## What This Site Does

This website is designed to:

- **Showcase CTF Writeups**: Detailed walkthroughs of Capture The Flag challenges from platforms like HackTheBox, TryHackMe, PicoCTF, and CTFtime. Each writeup includes reconnaissance, enumeration, exploitation, and post-exploitation steps with code examples and remediation advice.

- **Publish Security Research**: Vulnerability findings and security research disclosures with severity ratings, reproduction steps, proof-of-concept code, and fix verification. This demonstrates responsible disclosure practices and contributes to the security community.

- **Display Projects & Skills**: A portfolio of security-related projects, tools, and technical skills including penetration testing, web security, network security, and various security tools.

- **Provide Contact Information**: Professional bio, education background, and links to GitHub, LinkedIn, and email for networking and collaboration opportunities.

## Key Features

- **Dark Modern Design**: Clean, professional aesthetic optimized for security professionals with a dark theme and cyan accents
- **Filterable Content**: CTF writeups can be filtered by platform (HackTheBox, TryHackMe, etc.) and difficulty (Easy to Insane)
- **Searchable Research**: Security findings can be filtered by severity (Critical to Low) and searched by keywords
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Reusable Templates**: Standardized templates for CTF writeups and research disclosures ensure consistency

## things for myself under this header

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

### Netlify

1. Push this repository to GitHub
2. Connect to Netlify via GitHub integration
3. Netlify will automatically deploy the site
4. Configure custom domain: seby0x.dev

### Manual Deployment

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your site will be live instantly
