# Specification

## First implementation
Scheme B is selected. All pages live at the top of the folder.
The three architecture pages and graphics.html / model-making.html are provisional
templates for the existing draft slots. Confirm count, filenames and content
before publication. config.js holds only a Supabase project URL and browser-safe
publishable key. The configured project is https://igsjqplbzrenflrdzhuj.supabase.co.
If configuration or the service is unavailable, gated pages stay hidden.
Use HTTP for authentication; file:// cannot provide a
valid confirmation redirect. There is no demo login or simulated session.
The confirmed live address is https://mariam-alkhayyat-architecture.vercel.app/.
Canonical and Open Graph page URLs use this address (the home page uses /).
Sharing image URLs are absolute and point to /images/share.png; include PNG type,
1200 by 630 dimensions, and alt text for Open Graph and Twitter. Navigation and
on-page assets stay relative. The typographic PNG remains until a final project
share image is chosen.

## Purpose and audience
A personal architecture portfolio for Mariam Alkhayyat, aimed at tutors, architecture studios, and potential employers.

Visitors should immediately encounter her projects and understand that the site presents architecture alongside visual work. Do not impose an architectural philosophy she has not supplied.

## Identity and confirmed content
- Name: Mariam Alkhayyat.
- Site title: Mariam Alkhayyat — Architecture Portfolio.
- About statement: “I’m Mariam Alkhayyat, a third-year architecture student at the University of Miami.”
- Approximately three completed architecture projects.
- Additional visual projects include graphics and model making.
- Available content includes photographs or renders, architectural drawings, sketches, and model photographs.
- Email: [ADD: Mariam’s email address].
- Project titles, descriptions, exact project count, image files, and captions: ask Mariam before adding them.

## Pages

### login.html
Purpose: the public front door for sign up and log in.
Content:
- Mariam’s name and Architecture Portfolio.
- One selected project image or its labelled placeholder.
- Email and password fields.
- Log in and Sign up actions.
- Clear loading, error, and confirmation messages.

This page is never gated.

### index.html
Purpose: a curated introduction to Mariam and her work, distinct from the archive.
Content:
- A compact site heading.
- One prominent featured project with a large image, title, category and detail link.
- A short introduction using the confirmed About statement.
- A small selected-work preview rather than every archive entry.
- For this draft, slot 1 is the temporary feature; slot 2 and Graphics form the
  selected preview. Mariam will confirm the feature and final selection later.
  Keep missing project titles, descriptions and images explicitly labelled.
- A clear link to the complete Projects archive and a link to About.
- Links to Projects and the relevant project pages.
- Home, Projects, About, and Log out navigation.

index.html sits at the top of the folder.

### projects.html
Purpose: the complete project archive, without the Home introduction or feature.
Content:
- Architecture section containing approximately three completed projects.
- Visual Work section containing graphics and model making.
- Equally weighted image-led cards with titles, categories, descriptions and links.
- Include every current draft entry: three architecture slots, Graphics and
  Model making. Placeholder entries are not a confirmed final project count.
- Links to individual project pages.
- Shared navigation and Log out.

### Individual architecture project pages
Purpose: explain each architecture project through its images and supplied text.
Use relative filenames such as project-01.html, project-02.html, and project-03.html after confirming the exact number.
Content:
- Supplied project title and one-line description.
- Main render or photograph.
- Plans, sections, elevations, diagrams, sketches, and model photographs where available.
- Supplied captions and project explanation.
- Back to Projects link.
- Shared navigation and Log out.

Do not invent project names, locations, dates, dimensions, briefs, collaborators, or outcomes.

### Individual visual project pages
Purpose: show graphics and model making in more detail.
Create pages only for work Mariam supplies, with filenames agreed during implementation.
Content:
- Supplied title and one-line description.
- Graphics or model photographs.
- Supplied captions and process notes.
- Back to Projects link.
- Shared navigation and Log out.

### about.html
Purpose: a concise, professional editorial profile, not a résumé or long biography.
Content:
- Introduction: “I’m Mariam Alkhayyat, an architecture student at the University
  of Miami. My work explores residential design, spatial experience, and how
  architecture can support everyday life. I’m especially interested in the
  relationship between design, representation, and fabrication.”
- Software: AutoCAD, Rhino, Grasshopper, Illustrator, Photoshop, D5 Render,
  Lumion, SketchUp.
- Skills: Parametric Design, 3D Modeling, Physical Model Making, Laser Cutting,
  3D Printing, Architectural Drawing, Digital Rendering.
- Languages: Arabic, Fluent; English, Fluent.
- Education: University of Miami, School of Architecture.
- Awards: President’s Honor Roll; Honor Roll.
- No phone number, personal location, invented dates, degree names or other facts.
- Present the introduction above compact supporting sections with generous space,
  clear hierarchy and a calm editorial layout. Avoid timelines and résumé tables.
- Preserve Cormorant Garamond headings, Raleway supporting text and the existing
  Crème/Sable/Argile/Terracotta palette. Other pages remain unchanged in this round,
  including the previously confirmed short introduction on Home.
- Shared navigation and Log out.

## Log-in gate
- Use Supabase Auth for email-and-password sign up and log in.
- Load Supabase through its CDN script tag.
- login.html is never gated.
- Every page except login.html checks the session and sends signed-out visitors to login.html.
- After successful log-in, go to index.html.
- Hide gated page content until the session check finishes.
- If email confirmation is enabled, explain the confirmation step; do not treat sign up as a successful log-in before a session exists.
- Configure Supabase’s site URL and allowed confirmation redirects for the deployed site.
  Site URL: https://mariam-alkhayyat-architecture.vercel.app/.
  Allowed confirmation redirect: https://mariam-alkhayyat-architecture.vercel.app/login.html.
  These dashboard settings require project administration access; the browser
  publishable key cannot change them.
- Provide Log out on every portfolio page. Signing out clears the session and returns to login.html.
- If login.html is viewed while signed in, provide a route to index.html and a Log out action.
- All site navigation and asset links are relative. The Supabase CDN and authentication service are external dependencies.
- Use only Supabase’s browser-safe publishable key. Never expose a secret or service-role key.
- The gate controls the browsing experience; static HTML and image files remain publicly retrievable. Do not present it as protection for confidential work.

## Content rule
Never invent facts, dimensions, dates, or names Mariam has not given. Ask her instead.

For missing written content, use explicit [ADD: ...] placeholders during drafting. Confirm factual text and meaningful image descriptions before publication.

## Build and publication
- Plain HTML, CSS, and JavaScript files only.
- No frameworks, npm, or build step.
- Use shared CSS and JavaScript files where useful.
- Load Supabase from its CDN script tag.
- index.html sits at the top of the folder.
- The site must work on a phone.
- Publish from a GitHub repository to Vercel as a static site.
- Preserve direct access to page addresses ending in .html.
- Every page has a meaningful title and one-line description.
- Add a share image and appropriate sharing metadata.
- Open any link to the live site in a new tab or window.

## Images
- Mariam’s image files go in images/.
- Where no image exists, use a plain grey box labelled [ADD: image of ...].
- Do not substitute invented projects or unrelated stock imagery.
- Every image has meaningful alt text based on what it actually shows.
- Preserve drawings without cropping.
- Optimise images and tell Mariam if any file exceeds 500 KB.
- Ask Mariam which image should appear on login.html and in link previews.

## Out of scope
- Payments.
- Storing anything about visitors beyond their log-in.
- Any database tables.
- Visitor profiles, saved projects, analytics, and contact-form storage.

## Done when
- [ ] Works on a phone.
- [ ] The menu reaches every page.
- [x] Sign up, log in, and log out work (Mariam confirmed local browser testing on October 8, 2026).
- [x] Typing a page address ending in .html while signed out sends the visitor to login.html (local browser test).
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
