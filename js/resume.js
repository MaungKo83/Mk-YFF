await page.pdf({
  path: 'resume.pdf',
  format: 'A4',
  printBackground: true,
  scale: 1,
  preferCSSPageSize: true,
});
