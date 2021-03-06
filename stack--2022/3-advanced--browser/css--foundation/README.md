
Base CSS improving the default browser stylesheet.

> sand down some of the rough edges in the CSS language.
> I do this with a functional set of custom baseline styles. ([Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/))

This is **not** a CSS reset:
- This layer assumes a CSS reset

This is **not** a CSS framework:
- This thin layer of improvements should be usable on every website.
- No "optional" classes are declared

The goal is to be used as a base for more advanced CSS frameworks:
- by default, the minimal styles to make a page looks good,
  in the spirit of [perfectmotherfuckingwebsite](https://perfectmotherfuckingwebsite.com/) or [web-design-in-4-minutes](https://jgthms.com/web-design-in-4-minutes/)
- by default, activates clever settings gleaned across blog posts (see list at bottom)

Inspiration:
* inspired by [motherfuckingwebsite](https://motherfuckingwebsite.com/) → [better](https://bettermotherfuckingwebsite.com/) → [perfect](https://perfectmotherfuckingwebsite.com/) → [best](https://bestmotherfucking.website/)
* inspired by techniques borrowed in articles around the net (see refs. in the code and "credits" below)


## Usage

### automatic (reset)
By default, this stylesheet will activate a page like "mother fucking website".
```html
	<link rel="stylesheet" type="text/css"
			href="TODO"/>
```
alternatively:
```css
@import 'TODO';
```

### customization

```css
:root {
	--o⋄color⁚fg--main: black;
	--o⋄color⁚fg--strong: var(--o⋄color⁚fg--main);
	--o⋄color⁚fg--secondary: 0.66;
	--o⋄color⁚fg--ancillary: 0.33;
	--o⋄color⁚fg--accent: (default blue);
	--o⋄color⁚fg--activity-outline: (default another blue);
	--o⋄color⁚bg--main: white;
	--o⋄color⁚bg--code: ;

	--o⋄color⁚fg--link:          hsl(240, 100%, 50%);
	--o⋄color⁚fg--link--visited: hsl(271, 68%, 32%);
}
```

TODO favicon unicode https://piccalil.li/quick-tip/add-inline-svg-directly-in-your-css/
