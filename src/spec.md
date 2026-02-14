# Specification

## Summary
**Goal:** Add the two user-uploaded photos to the Valentine’s website “Our Beautiful Moments” gallery.

**Planned changes:**
- Add the two uploaded image files (`Messenger_creation_358DDD99-4DC4-4B99-9AB8-F8F5604864CA.jpeg` and `Messenger_creation_358DDD99-4DC4-4B99-9AB8-F8F5604864CA-1.jpeg`) to the frontend as static assets with stable runtime URLs.
- Update `frontend/src/components/sections/GallerySection.tsx` to include two new gallery entries that render via the existing `FramedGalleryImage` component.
- Provide English alt text for the two new gallery items and ensure the existing responsive grid layout remains intact on mobile and desktop.

**User-visible outcome:** The “Our Beautiful Moments” gallery shows two additional photos, displayed consistently with the existing framed gallery styling and without broken images.
