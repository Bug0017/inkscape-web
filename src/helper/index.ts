export const addFontToDocument = (font: any) => {
  debugger;
  if (font.family) {
    const newFont = new FontFace(font.family, `url(${font.files.regular})`);
    newFont.load().then(() => {
      document.fonts.add(newFont);
    });
  }
};
