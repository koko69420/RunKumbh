# RunKumbh 2025

RunKumbh 2025 is an interactive event portal and GIS route visualization platform developed for the **Monsoon RunKumbh Marathon**, organized by the National Cadet Corps (NCC) cadets of RV Institute of Technology and Management (RVITM), Bengaluru.

The platform provides participant route guidance, GIS course maps, event scheduling, dynamic countdown timers, and event galleries.

---

## Features

- **Geospatial Route Mapping (KML)**:
  - Course tracks encoded using standard Keyhole Markup Language (`.kml`) format.
  - Division-specific paths:
    - Men's division race course (`runkumbh_mens.kml`)
    - Women's division race course (`runkumbh_womens.kml`)
    - Combined overview and transit tracks (`combined_route.kml`, `RunKumbh Path.kml`, `runkumbh_route.kml`)
- **Event Coordination & Countdown**:
  - Comprehensive schedule and details for the race held on Saturday, May 31, 2025.
  - Real-time countdown timer calculating remaining days, hours, minutes, and seconds until the marathon commences.
- **Moments & Runner Media**:
  - Interactive photo showcase celebrating participants, organizers, and course highlights.
  - Dedicated runner bib asset repository (`Bibs/`).
- **Responsive Dual-Orientation UI**:
  - Adaptive styling using device orientation media queries:
    - `style.css`: Desktop and landscape display layouts.
    - `mobile.css`: Mobile and portrait-optimized layouts.
  - Touch-friendly collapsible navigation drawer with hamburger animation.
  - Smooth anchor link scrolling with sticky navigation bar and back-to-top button.
  - Scroll-triggered entrance animations powered by AOS (Animate On Scroll).
- **Custom Domain Deployment**:
  - Configured with `CNAME` routing to [`runkumbh.in`](https://runkumbh.in) on GitHub Pages.

---

## Project Structure

```text
RunKumbh/
├── Bibs/                           # Runner bib assets and participant media
├── CNAME                           # Custom domain configuration (runkumbh.in)
├── combined_route.kml              # Combined marathon route track
├── images/                         # Logos, sponsor emblems, runner graphics, and photos
├── index.html                      # Main web application entry point
├── mobile.css                      # Portrait orientation stylesheet
├── RunKumbh Path.kml               # Primary GPS route track
├── runkumbh_mens.kml               # Men's race course coordinates
├── runkumbh_route.kml              # Segmented marathon checkpoints
├── runkumbh_womens.kml             # Women's race course coordinates
├── script.js                       # Mobile menu, countdown, and scroll controllers
├── style.css                       # Landscape orientation stylesheet
└── README.md                       # Project documentation
```

---

## Software & Technologies

- **Markup & Styling**:
  - HTML5
  - CSS3 (Flexbox, CSS Grid, Orientation Queries `screen and (orientation: landscape|portrait)`)
- **Scripting**:
  - Native JavaScript (DOM APIs, Interval Timers, Event Listeners)
- **External Libraries**:
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) v2.3.1 (via CDN)
  - [FontAwesome](https://fontawesome.com/) 6.0 (via cdnjs)
- **Geographic Data**:
  - Open Geospatial Consortium (OGC) KML 2.2 XML schema
- **Hosting & Infrastructure**:
  - GitHub Pages
  - Custom domain routing (`CNAME`)

---

## Local Development & Preview

Because RunKumbh is a static client-side web application, you can test and run it locally with any lightweight static HTTP server:

```bash
# Clone the repository
git clone https://github.com/koko69420/RunKumbh.git
cd RunKumbh

# Option 1: Python HTTP server
python3 -m http.server 8000

# Option 2: Node.js http-server
npx http-server -p 8000
```

Open `http://localhost:8000` in your web browser.

---

## Credits & Acknowledgements

- **Lead Developer**: Kausthubh Viswanath
- **Design & Content**: Rakshitha M S
- **Debugging & Quality Assurance**: Pruthvi Sriram
- **Event Organizing Body**: NCC Cadets of RVITM College, Bengaluru

---

## License

All rights reserved by the original creators. Any unauthorized use or distribution of this code without explicit permission is strictly prohibited.
