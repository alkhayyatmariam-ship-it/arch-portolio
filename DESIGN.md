# Design

## Selected direction — Scheme B: Working index
Scheme B is selected for every page. All pages live at the top of the folder.
The scheme comparison folders are removed. The attitude is direct and structured,
like a carefully typeset project register. Use predominantly Crème backgrounds,
quiet dark text, subtle dividers, grey image placeholders, Cormorant Garamond
headings and Raleway supporting text.
Home uses one prominent featured image, a brief personal introduction and a small
curated preview spanning both categories. Project Archives separates a structured Architecture
Projects grid from a looser Visual Studies gallery with unequal column widths
and entries aligned along the top. Both keep the existing type and palette.
Other pages retain their proportions and spacing. Use relative .html links.
The five projects use supplied imagery: Pivot House, Tidehall Fishmarket,
Gradient Grid, City of the Sun and Luna House. Home features Tidehall Fishmarket and
previews Pivot House, Gradient Grid and Luna House. Preview images remain uncropped.
Detail galleries lead with one representative image, then pair smaller images
and let wide drawings span both columns. All images preserve their proportions.
Portfolio pages check Supabase sessions before revealing content. The login form
uses the same design. The temporary share image is a typographic PNG; replace it
with Mariam's chosen project image when supplied.
The live site is https://mariam-alkhayyat-architecture.vercel.app/.
Every page uses its absolute public URL for canonical and Open Graph links and
the absolute /images/share.png URL for Open Graph and Twitter previews. Include
the image dimensions (1200 by 630), PNG type, and descriptive share-image alt text.

## Concept
Mariam Alkhayyat’s architecture portfolio presents her projects through a structured working index. Warm neutrals, quiet typography, and generous space give architecture, graphics, and model making room to speak.

## References
- Septiembre Arquitectura — https://www.septiembrearquitectura.com/
  Borrow the principle of a restrained neutral colour system, guided by Mariam’s preference for its palette.
- Norm Architects — https://normcph.com/
  Borrow the calm arrangement, clear visual hierarchy, and generous space that Mariam likes.
- Borrow systems, never identities. Do not copy names, logos, text, images, or fonts from either reference.

## Colour and material
Use the exact surface and accent palette:
- Crème #F5F2EE: dominant page background, including header and footer.
- Sable #F1E0CB: occasional light secondary surfaces, such as the login form.
- Argile #CFA999: sparse, decorative dividers; never a large background or small
  text colour because it does not provide sufficient contrast on light surfaces.
- Terracotta #9F5434: controlled accents on active navigation, links, project
  numbers, buttons and keyboard focus. Never a large background.
Retain dark neutral ink #302B26 for readable headings and body text and the
existing grey #D8D8D8 for drafting image placeholders. These are functional text
and placeholder neutrals, not additional decorative surface colours.
No dark or brown page sections. Keep images in their original colours.

Keep text strongly contrasted against its background. Evoke natural materials through colour and spacing, without decorative texture overlays.

## Typography
Use exactly two named typefaces throughout the website: Cormorant Garamond and Raleway.
Cormorant Garamond is the refined serif for major headings, project titles and important
display text. Use regular weight (400), restrained tracking (-0.025em for main
headings, -0.015em for section and project headings), and existing sizes and line
heights. Avoid chunky bold or playful display lettering.
Raleway is the clean sans serif for the site name, navigation, body text,
Architecture Portfolio, project numbers and categories, captions, placeholder
labels, form fields, buttons, work links and footer text. Keep secondary text at
regular weight and its existing sizes. No monospace or third named font.
Navigation uses Raleway at 14px, regular weight, line height 1.5 and 0.02em tracking.
Underline the current page rather than bolding it. Preserve visible keyboard
focus and existing 44px targets. Load both fonts at weight 400 through Google
Fonts with display=swap; generic serif/sans-serif fallbacks keep text readable.
- Site name: 20px, regular weight.
- Main heading: 40px desktop, 32px phone.
- Section heading: 28px desktop, 24px phone.
- Project heading: 22px desktop, 20px phone.
- Body: 17px, line height 1.65.
- Captions and navigation: 14px, line height 1.5.
- Form fields and buttons: 16px minimum.

Typography is refined, calm and consistent. The serif establishes hierarchy;
the sans serif provides quiet, legible supporting information.
Avoid oversized statements, very thin weights, and long passages in capitals.
This refinement changes typography and palette only: page layout, spacing,
imagery and site structure stay as they are.

## Layout and spacing
- Home: broad featured image with caption, brief introduction, then two preview
  cards. Projects: a two-column desktop archive grid with consistent image ratios
  and category labels. Both stack in one column on phones.
- Use a 200px heading column beside the content column on desktop and a single-column phone layout.
- Maximum content width: 1280px.
- Page margins: 48px desktop, 20px phone.
- Grid gaps: 24px desktop, 16px phone.
- Spacing scale: 8, 16, 24, 32, 48, 64, and 96px.
- Use generous space between projects and compact spacing between an image and its caption.
- Each page scrolls normally. Navigate between separate pages using a clear menu.
- Home starts with projects, without a long introductory statement.

## Images
- Mostly frame images with margins.
- Mix renders or photographs with plans, sections, sketches, and model photographs.
- Preserve original colours; do not impose a black-and-white filter.
- Show drawings uncropped. Preserve model and graphic details.
- Use deliberate image groupings rather than overlapping collages.
- Missing images use a plain grey box labelled [ADD: image of ...].
- Provide meaningful alt text for every image.
- Optimise images for loading speed and flag files over 500 KB.

## Movement
- Use subtle hover changes and optional gentle fades lasting 150–250ms.
- Content must remain visible if animation or JavaScript fails.
- Respect reduced-motion preferences.
- No parallax, scroll hijacking, moving cursors, or automatic slideshows.

## Log-in page
- Use an image-led entrance: one large project image beside a simple form.
- On phones, stack the image and form without pushing the form far below the first screen.
- Display “Mariam Alkhayyat” and “Architecture Portfolio.”
- Use the same warm palette and quiet typography as the portfolio.
- Provide clearly labelled email and password fields, Log in and Sign up actions, and readable status messages.
- Let Mariam choose the entrance image; until then use [ADD: image of a selected architecture project].
- Do not use a decorative form overlay that makes text difficult to read.

## Menu and buttons
- Show Home, Project Archives, About, and Log out on every portfolio page.
- Use a compact, clearly labelled menu on phones.
- Indicate the current page and provide visible keyboard focus.
- Primary buttons use Terracotta with Crème text.
- Secondary actions use plain text links or outlined buttons.
- Interactive targets are at least 44px high.
- The log-in page offers Log in and Sign up; Log out appears there only if a signed-in session exists.

## Tone of voice
Write simply, directly, and personally. Describe actual work and design decisions without inflated claims, generic architectural slogans, or invented achievements.

## Five never rules
1. Never clutter a page with competing images or unnecessary decoration.
2. Never use flashy effects, dramatic transitions, or intrusive pop-ups.
3. Never make the portfolio feel cold, corporate, or sterile.
4. Never use tiny text, weak contrast, or confusing navigation.
5. Never sacrifice loading speed for oversized media or decorative effects.
