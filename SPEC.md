# Specification

## Project Archives categories
The main navigation reads Home, Project Archives, About and Log out. Project Archives keeps the existing
projects.html URL so existing links continue to work. This categorization
supersedes the former single project archive and generic Project labels.
- Architecture Projects: Pivot House, Tidehall Fishmarket, Gradient Grid.
- Visual Studies: Luna House (graphic and physical model study), City of the Sun
  (drawing-based study). These are not full architecture projects.
Project Archives has clearly separated sections: a structured architecture card grid and a
looser editorial visual-study gallery with varied widths and top-aligned entries.
All imagery stays uncropped. Future supplied drawings, graphics, physical models,
fabrication work and smaller design studies belong in Visual Studies; do not
create fictional entries. Home retains Tidehall as the feature and previews
Pivot House, Gradient Grid and Luna House to represent both categories.
About content and architecture detail content/layout remain unchanged. Only
their shared navigation label and back-link wording change to Project Archives.

## First implementation
Scheme B is selected. All pages live at the top of the folder.
The portfolio now uses the five supplied project folders. Existing detail URLs
are retained: project-01.html = Pivot House, project-02.html = Tidehall Fishmarket,
project-03.html = Gradient Grid, graphics.html = City of the Sun,
model-making.html = Luna House. Display names are readable forms of folder names;
no dates, locations, descriptions or project facts are inferred.
config.js holds only a Supabase project URL and browser-safe
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
- Supplied project names: Pivot House, Tidehall Fishmarket, Gradient Grid,
  City of the Sun and Luna House.
- Available content includes photographs or renders, architectural drawings, sketches, and model photographs.
- Email: [ADD: Mariam’s email address].
- Further project descriptions, facts and authored captions: ask Mariam before adding them.

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
- Feature Tidehall Fishmarket with its exterior rendering. Preview Pivot House
  and Gradient Grid using representative images from their own folders.
- A clear link to the complete Project Archives archive and a link to About.
- Links to Projects and the relevant project pages.
- Home, Project Archives, About, and Log out navigation.

index.html sits at the top of the folder.

### projects.html
Purpose: the complete Project Archives archive with Architecture Projects and Visual Studies.
Content:
- Architecture Projects uses structured image-led cards with names and links.
  Every card has the same 3:2 image frame and caption structure. Images are
  centered with object-fit: contain. Category, title and View link occupy matching
  rows. Use two equal desktop columns with consistent gaps and one column on
  smaller screens; retain all existing imagery, categories, fonts and colors.
- Visual Studies uses a looser gallery with study names, supplied study types
  and links. Do not present these entries as full architecture projects.
- Include Pivot House, Tidehall Fishmarket, Gradient Grid, City of the Sun and
  Luna House. Use supplied names, confirmed categories and real imagery.
- Links to individual project pages.
- Shared navigation and Log out.

### Individual architecture project pages
Purpose: explain each architecture project through its images and supplied text.
Use the existing relative filenames mapped in First implementation above.
Content:
- Supplied project title and one-line description.
- Main render or photograph.
- Plans, sections, elevations, diagrams, sketches, and model photographs where available.
- Supplied captions and project explanation.
- Back to Project Archives link.
- Shared navigation and Log out.

Do not invent project names, locations, dates, dimensions, briefs, collaborators, or outcomes.

### Individual visual project pages
Purpose: show graphics and model making in more detail.
The existing graphics.html and model-making.html URLs now contain City of the Sun
and Luna House respectively, with supplied imagery and project names.
Content:
- Supplied title and one-line description.
- Graphics or model photographs.
- Supplied captions and process notes.
- Back to Project Archives link.
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
- Tidehall Fishmarket includes the added waterfront promenade rendering
  (Screenshot 2026-10-08 011914.png) as a full-width gallery image after the plans.
  Preserve its original proportions and the existing typography and palette.
- Luna House detail image order: pink exploded axonometric diagram first,
  courtyard-house model overview second, six-view model montage third.
- Use originals from images/pivot-house, images/tidehall-fishmarket,
  images/gradient-grid, images/city-of-the-sun and images/luna-house.
- Detail pages include every image from the corresponding folder with alt text
  describing observed visual content. Use a large lead image followed by a spaced
  gallery, with wide drawings spanning the gallery. Preserve intrinsic aspect
  ratios everywhere, including preview cards; never crop drawings.
- No project descriptions, dates or locations are added in this imagery round.
- Use the Pivot House axonometric image for the login entrance too. Keep the
  existing share image until Mariam selects a final one. About and navigation
  structure stay unchanged, as do the typography and palette.
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
