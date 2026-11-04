# CCC181 Week 10: CampusConnect Mobile-First Login Page

React + TypeScript starter for the Week 10 group activity. The page is already
built. Your group's job is the **mobile-first CSS** and the **GitHub teamwork**.

## Run it

```bash
npm install
npm run dev          # open the local URL it prints
npm run dev:phone    # same, but your phone (same Wi-Fi) can open the Network URL
npm run build        # must finish with no errors before you submit
```

## Rules

- Edit only the CSS files in `src/styles/` (one member = one file). Do not edit `reset.css`.
- Plain CSS only. No Tailwind, Bootstrap, Material UI, styled-components, or any UI library.
- Phone styles first (no media query), then `min-width` queries only. Never `max-width`.
- Do not edit the `.tsx` files or rename classes. If you must, tell the group first.

## Group information (fill in)

| Item | Your answer |
| --- | --- |
| Group number |9|
| Section |BSIT-3B|
| Repository URL | https://github.com/zynthacecatipay-arch/ccc181-week10-group9... |

## Members (each member fills in their own row in their own commit)

| Member | Name | GitHub username | CSS file | What I did |
| --- | --- | --- | --- | --- |
| 1 (leader) | Zynth Ace Catipay | zynthacecatipay-arch| `base.css` | Set up the repo, wrote the base layout and brand panel CSS, and added the viewport meta tag |
| 2 (member) | Khrystine D. Coronel | KhrystineCoronel | `nav.css` | Styled the responsive navigation bar and footer. |
| 3 | | | `form.css` | |

## Experiment 0: the page without the viewport tag

What did the page look like in DevTools phone mode **before** adding the viewport meta tag? 
What changed **after** adding it?

> Before the viewport tag, the page looked zoomed out and tiny in phone mode; after adding it and hard reloading, the page used the real phone width and the text became readable in one column.

> After adding the viewport tag and hard reloading, the page used the real phone width, so the text was readable and the layout showed as one column instead of looking zoomed out.

## DevTools test results

| Width | What must be true | Pass? |
| --- | --- | --- |
| 360 px | 1 column. Nav links stacked and 48px tall. Options and buttons stacked. Footer in 1 column. No sideways scrollbar. | yes|
| 768 px | Nav in one row (brand left, links right). Checkbox and link in one row. Two buttons side by side. | yes|
| 1024 px | Brand panel and login card side by side. Footer in 3 columns. Heading is larger. | yes|
| 1280 px | Content centered and stops at 1200px. | yes |

### Breakpoints I observed

Using **Show media queries** and dragging slowly from 360 px to 1280 px, the layout changed at these exact widths:

> The layout changed at these widths:
- 360px: Mobile layout; navigation and content are stacked.
- 768px: Navigation becomes horizontal; form options and buttons are arranged in rows.
- 1024px: Brand panel and login card appear side by side; footer changes to 3 columns.
- 1280px: Main content becomes centered with a maximum width of 1200px.
Broken width: At 360px, the brand panel and login form appeared unstyled and misaligned in my screenshot.
Screenshots are in `screenshots/` as `360.png`, `768.png`, `1024.png`, `1280.png`.

## What our group learned (leader writes this last)

> (write your answer here)
