What I would improve in my code:
1.Overlapping card layouts use hardcoded pixel widths that break on small screens.
2. Inline styles in HTML could be moved into SCSS for cleaner HTML
3. Add proper ARIA labels for accessibility
4. Further abstract the JavaScript — right now adding a new feature section requires
  editing both the HTML and the JS data object, ideally the whole section would be 
  generated from the data object alone like the FAQ already is.

What's good about the mockup design:
1. Clean, modern design with a consistent colour palette
2. Clear visual hierarchy — badges, headings and body text are well differentiated
3. Diagonal section transitions give the page some personality

What could be improved in the mockup design:
1. Add a proper mobile mockup to remove guesswork OR write comments on how the elements should adapt
   (e.g., do the awards stack or get a slider)
2. Make award cards consistent - either star ratings or links. They would just look better unified.
3. Make the Google Play, Apple Store buttons, and the "Infinite Solutions" box have all rounded corners
   (or make more elements have the box design they have of 2 out of 4 rounded, 2 angled)
