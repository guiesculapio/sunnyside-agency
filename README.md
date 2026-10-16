# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

The design was made for 375px (mobile) and 1440px (desktop). I also tested the full range in between, from 320px up to wide screens.

### Links

- Solution URL: [github.com/guiesculapio/sunnyside-agency](https://github.com/guiesculapio/sunnyside-agency)
- Live Site URL: [guiesculapio.github.io/sunnyside-agency](https://guiesculapio.github.io/sunnyside-agency/)

## My process

### Built with

- Semantic HTML5 markup (`header`, `nav`, `main`, `section`, `figure`, `blockquote`, `footer`)
- CSS custom properties for the whole color palette
- Flexbox and CSS Grid
- Mobile-first workflow, with a single `769px` breakpoint
- Responsive images with `<picture>` and `<source media>`
- `clamp()` for the hero title, so it fits down to 320px
- Vanilla JavaScript, only for the mobile menu toggle
- Google Fonts: Barlow and Fraunces

### What I learned

**Stacking contexts.** The header sits over the hero photo (`position: absolute`), and the title and arrow sit over it too. When the hero became `position: relative`, it painted over the header, because positioned elements are stacked by source order. A `z-index` on the header fixed it, and it taught me why children cannot escape their parent's stacking level.

**Specificity and source order.** Several times a rule "did nothing" for one of two reasons: a more specific rule was winning (`.nav a` beat `.button-header`), or two rules tied and the later one won (a media query written above the base rule it was meant to override). Reading the Styles panel in DevTools to see which declaration is crossed out became my first debugging step.

**Animating an element that is hidden.** `display: none` cannot be transitioned. The mobile menu uses `opacity`, `visibility` and `transform` instead, and `visibility: hidden` also keeps the closed links out of the tab order.

```js
menuButton.addEventListener("click", () => {
  const isActive = nav.classList.toggle("nav-active");
  menuButton.setAttribute("aria-expanded", isActive);
});
```

```css
.nav {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition-property: opacity, visibility, transform;
  transition-duration: 0.3s;
}

.nav.nav-active {
  opacity: 1;
  visibility: visible;
  transform: none;
}
```

**Pseudo-elements for decoration.** The notch on the mobile menu panel is a zero-size `::before` drawn with borders, and the colored band behind "Learn more" is a `::before` with a negative `z-index` inside a link that creates its own stacking context.

**Fixed pixels break between breakpoints.** Spacing copied from the 1440px design squeezed the text columns just above 769px. Using percentages, a `min-height` with `object-fit: cover` on the photos, and `clamp()` for the title made the layout hold at every width. I also turned transitions off while the window is being resized, so the Contact button and the menu do not flash when the breakpoint is crossed.

**Accessibility basics.** Named navigation landmarks, `aria-expanded` on the toggle, distinct accessible names for the two "Learn more" links, meaningful `alt` text only where an image carries information, and a smooth scroll that respects `prefers-reduced-motion`.

### Continued development

- **Color contrast.** I kept the colors from the style guide, but some pairs are below the WCAG AA ratio (4.5:1 for normal text, 3:1 for large text):

  | Text | Contrast |
  | --- | --- |
  | Section paragraphs (Grey 550 on cream) | 3.61 |
  | Testimonial roles and heading (Grey 400 on cream) | 2.26 |
  | Footer links (Green 500 on the mint background) | 2.35 |
  | Hero title (white on the blue photo) | 2.08 |

  I want to practice finding accessible alternatives that stay close to the original design.
- Add a screenshot of the finished page to this README.
- Replace the placeholder `#` links (the "Learn more" links and the social icons) with real destinations.
- Add automated checks (an accessibility audit and a visual comparison with the design files).

### AI Collaboration

I used **Claude Code** as a guide throughout this project. The repository instructions asked it to act as a mentor, so for most of the work it described what to build, asked questions, and reviewed what I wrote instead of handing over the code.

- **What I wrote myself, with guidance:** the HTML structure, the header and the mobile menu (including the JavaScript), the hero, the Contact button, and the first two content sections.
- **What Claude implemented at my request, and I then reviewed:** the Graphic design/Photography, testimonials, gallery and footer styling, the accessibility pass, and fixes for responsive bugs I reported.
- **What worked well:** it measured the page in a real browser at different widths instead of guessing, which found problems I could not see in my own screen (a horizontal scroll at 320px, a title that overlapped the fruit photos just above the breakpoint). Asking it to explain *why* a rule lost or an element was hidden taught me more than the fixes did.
- **What I would do differently:** some of its early diagnoses were wrong (it misread a measurement taken in a zero-width test window), so I learned to check suggestions against DevTools before trusting them.

## Author

- GitHub - [@guiesculapio](https://github.com/guiesculapio)
