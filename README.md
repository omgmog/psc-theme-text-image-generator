## Playstation Classic theme text image generator

### What is this?

This is a little utility script I wrote to generate images containing localised text for Playstation Classic themes.

The real purpose for this script was to not have to make a bunch of localised images manually in Photoshop. 

In the default theme, the image-based text looks like crap:

![](https://i.imgur.com/gQrDGXL.png)

With this script you can quickly generate nicer images:

![](https://i.imgur.com/BsubrYU.png)

### Usage

First, edit the definitions to use your custom `.fnt`, or strings.

Then from a terminal:

```
npm install .     // only need to do this the first time
node gen_images.js
```

You will find the generated images in the `out` directory.


### Notes

If you just use one language, you can edit the string definitions to generate just the language you use.

The `fonts` directory contains the following `.fnt` sets:

- Arial Unicode Bold 20px
- Arial Unicode Bold 22px
- Arial Unicode Bold 24px
- Arial Unicode Bold 32px
- Arial Unicode Bold 22px, with a shadow
- Arial Unicode Bold 32px, with a shadow

To create additional `.fnt` sets, use [Hiero](https://github.com/libgdx/libgdx/wiki/Hiero).

If you've made changes to any of the strings, run the `gen_chars.js` script:

```
node gen_chars.js`
```

This will output all of the unique characters used across all of the string definitions. You can copy/paste this in to Hiero to make sure you have all of the necessary font glyphs.

![](https://i.imgur.com/kYBB0mH.png)

I don't do anything smart with line wrapping, so if the font you've generated is too big, the text will just get cut off or will act weirdly.


Wrong/inconsistent filenames in original firmware theme that have caused me problems, e.g.:
- `MC_Franch_CA.png`
- `MC_J_S .png`
- `Play_Text_Rossian.png`

These are fixed as part of the `gen_images.js` script, so that the definitions can still use consistent spelling.

### HD Playstation Classic theme

If you want to find out more, check out the HD Playstation Classic theme I've created here:

[omgmog/psc-theme-hd](https://github.com/omgmog/psc-theme-hd)