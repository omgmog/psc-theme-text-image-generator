const jimp = require('jimp');
const strings = require('./definitions/strings.js').strings;

build_images = definition => {
  const data = require(`./definitions/${definition}.json`);
  const font_prefix = './fonts/';
  const font_suffix = '.fnt';

  data.strings.forEach(string => {
    let font_name = string.font ? string.font : data.font;

    new jimp(data.width, data.height, 0x00000000, (err, image) => {
      if (err) throw err;

      jimp.loadFont(`${font_prefix}${font_name}${font_suffix}`).then(font => {
        let x_off = (data.width - jimp.measureText(font, string.text)) / 2;
        let y_off = (data.height - jimp.measureTextHeight(font, string.text, data.width)) / 2;

        image.print(
          font, 
          x_off, 
          y_off, 
          string.text
        );

        string.names.forEach(name => {
          // For most names we need a _ after the prefix.
          if (name.length > 0) name = `_${name}`;
          let filename = `${data.prefix}${name}${data.suffix}`;
          switch (filename) {
            case 'MC_French_CA.png':
              // They spelled "French" wrong
              filename = 'MC_Franch_CA.png';
            break;
            case 'MC_J_S.png':
              // They added an extra space before the file extension
              filename = 'MC_J_S .png';
            break;
            case 'Play_Text_Russian.png':
              // They spelled "Russian" wrong.
              filename = 'Play_Text_Rossian.png';
            break;
          }
          image.write(`out/${data.path}/${filename}`);
        });
      });
    });
  });
}

strings.forEach(build_images);