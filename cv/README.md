# CV — canonical copy

**This folder is the source of truth for my CV.** If a version elsewhere
disagrees with this one, this one is right.

| File | What it is |
| --- | --- |
| `Juan_Sebastian_Ortiz_CV.pdf` | **The file to send.** A4, 3 pages. |
| `Juan_Sebastian_Ortiz_CV.md` | The source. Edit this one. |
| `Juan_Sebastian_Ortiz_CV.html` | Print-ready intermediate; regenerates the PDF. |

## Regenerating the PDF

After editing the markdown, update `.html` to match, then:

```bash
# macOS, Chrome or Chromium
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=cv/Juan_Sebastian_Ortiz_CV.pdf \
  "file://$(pwd)/cv/Juan_Sebastian_Ortiz_CV.html"
```

Or just open the `.html` and print to PDF (⌘P → Save as PDF). The page size is
set to **A4** in the stylesheet's `@page` rule — Brazil and Europe use A4, and a
Letter-sized CV prints wrong on both.

## Keeping this in step with the site

The site under `src/` is a **separate** copy of the same facts — its content
lives in the objects at the top of `src/App.jsx`. Editing one does not change
the other.

When something changes, update both, then `npm run deploy`. The two disagreeing
is the failure mode worth watching for: a recruiter comparing the PDF you sent
against the site you linked is exactly who will notice.
