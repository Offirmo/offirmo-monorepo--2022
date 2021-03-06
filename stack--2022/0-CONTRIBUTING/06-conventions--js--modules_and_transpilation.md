
# JS modules export and transpilation policy

## Policy

The public modules in this monorepo ase exposed as:
- Latest stable ES, with latest stable module exports
  - with sometimes a few stage 4 features when they are already widely supported https://github.com/tc39/ecma262
  - instructions [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) and [here](https://www.typescriptlang.org/docs/handbook/esm-node.html)
- as a convenience, pre-built CJS for latest ES (https://node.green/)
  supported by the oldest active LTS node (https://nodejs.org/en/about/releases/ or https://github.com/nodejs/Release)
- for modules in Typescript, trying to use the latest Typescript, best effort.
- while webpack is not used in this repo(*), we acknowledge that it's widely used and thus aim to support its latest version

See below more exact numbers.

Note: I do NOT agree with the opinion "don't transpile node_modules", see [issue]()


## Technical details

### PENDING updates
- ES2022
- TODO full ES6 https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-move-my-commonjs-project-to-esm
- 2022/10/25 oldest active LTS node 16 → 18  https://nodejs.org/en/about/releases/
- ??? webpack release 5 → 6  https://github.com/webpack/webpack/milestones  https://webpack.js.org/blog/
- TODO check [self referencing](https://www.typescriptlang.org/docs/handbook/esm-node.html) when [bug fix](https://github.com/microsoft/TypeScript/issues/46762)


### update 2022-05-02
* Policy update: NO LONGER held back by the old webpack from netlify-lambda!! 🥳
* Policy update: replaced ES support criteria by "reasonable support"
* Note: considering switch to [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) however this will happen gradually, need code rewrite

Updated state:
* latest ES = [ES2021](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [16](https://nodejs.org/en/about/releases/)
* latest ES reasonably supported by this node LTS (latest minor) = [ES2021](https://node.green/#ES2022)
* latest ES syntax supported by Webpack (= Acorn supports it + webpack bumped Acorn) = ES2021
  * latest webpack version = [5](https://webpack.js.org/)
  * version of Acorn in this webpack version = [^8](https://github.com/webpack/webpack/blob/master/package.json)
  * latest ES syntax reasonably supported by this Acorn = [2021](https://github.com/acornjs/acorn/tree/master/acorn)
* FYI compilers/polyfills https://kangax.github.io/compat-table/es2016plus/

= latest supported node = 16
= latest convenient ES = 2021


### update 2022-03-21
Check = no change

Updated state:
* latest ES = [ES2021](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [16](https://nodejs.org/en/about/releases/)
* latest ES supported by this node LTS = [ES2021](https://node.green/#ES2022)
* latest ES syntax supported by Webpack (= Acorn supports it + webpack bumped Acorn) = ES2021
  * latest webpack version = [5](https://webpack.js.org/)
  * version of Acorn in this webpack version = [^8](https://github.com/webpack/webpack/blob/master/package.json)
  * latest ES syntax supported by this Acorn = [2021](https://github.com/acornjs/acorn/tree/master/acorn)
* (special use) latest ES syntax supported by netlify-lambda = ES2019
  * latest netlify-lambda version = [2.0.15](https://github.com/netlify/netlify-lambda)
  * version of webpack in this version = [4](https://github.com/netlify/netlify-lambda/blob/master/package.json)
  * version of Acorn in this webpack version = [^6](https://github.com/webpack/webpack/blob/webpack-4/package.json)
  * latest ES syntax supported by this Acorn = ~[2019](https://github.com/acornjs/acorn/tree/6.x/acorn)
* FYI compilers/polyfills https://kangax.github.io/compat-table/es2016plus/

= latest supported node = 16
= latest convenient ES = 2019


### update 2021-10-12 (slightly early switch to node 16)
- ~2021/06 new ES 2020 → 2021
- 2021/10/26 oldest active LTS node 14 → 16

Updated state:
* latest ES = [ES2021](https://en.wikipedia.org/wiki/ECMAScript#Versions)    ___⬅CHANGE___
* oldest active LTS node = [16](https://nodejs.org/en/about/releases/)    ___⬅CHANGE___
* latest ES supported by this node LTS = [ES2021](https://node.green/#ES2021)   ___⬅CHANGE___
* latest ES syntax supported by Webpack (= Acorn supports it + webpack bumped Acorn) = ES2021   ___⬅CHANGE___
  * latest webpack version = [5](https://webpack.js.org/)
  * version of Acorn in this webpack version = [^8](https://github.com/webpack/webpack/blob/master/package.json)   ___⬅CHANGE___
  * latest ES syntax supported by this Acorn = [2021](https://github.com/acornjs/acorn/tree/master/acorn)   ___⬅CHANGE___
* (special use) latest ES syntax supported by netlify-lambda = ES2019
  * latest netlify-lambda version = [2.0.14](https://github.com/netlify/netlify-lambda)
  * version of webpack in this version = [4](https://github.com/netlify/netlify-lambda/blob/master/package.json)
  * version of Acorn in this webpack version = [^6](https://github.com/webpack/webpack/blob/webpack-4/package.json)
  * latest ES syntax supported by this Acorn = ~[2019](https://github.com/acornjs/acorn/tree/6.x/acorn)
* FYI compilers/polyfills https://kangax.github.io/compat-table/es2016plus/

= latest supported node = 16    ___⬅CHANGE___
= latest convenient ES = 2019 (:sad: due to netlify-lambda)


### update 2020-10-20
- 2020/10/27 oldest active LTS node 12 → 14
- 2020/10/10 webpack release 4 → 5

Updated state:
* latest ES = [ES2020](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [14](https://nodejs.org/en/about/releases/)    ___⬅CHANGE___
* latest ES supported by this node LTS = [ES2020](https://node.green/#ES2019)   ___⬅CHANGE___
* latest ES syntax supported by Webpack (= Acorn supports it + webpack bumped Acorn) = ES2020   ___⬅CHANGE___
  * latest webpack version = [5](https://webpack.js.org/)   ___⬅CHANGE___
  * version of Acorn in this webpack version = [^8](https://github.com/webpack/webpack/blob/master/package.json)   ___⬅CHANGE___
  * latest ES syntax supported by this Acorn = [2020](https://github.com/acornjs/acorn/tree/master/acorn)   ___⬅CHANGE___
* (special use) latest ES syntax supported by netlify-lambda = ES2019
  * latest netlify-lambda version = [2.01](https://github.com/netlify/netlify-lambda)
  * version of webpack in this version = [4](https://github.com/netlify/netlify-lambda/blob/master/package.json)
  * version of Acorn in this webpack version = [^6](https://github.com/webpack/webpack/blob/webpack-4/package.json)
  * latest ES syntax supported by this Acorn = ~[2019](https://github.com/acornjs/acorn/tree/6.x/acorn)
* FYI compilers/polyfills https://kangax.github.io/compat-table/es2016plus/

= latest supported node = 14    ___⬅CHANGE___
= latest convenient ES = 2019 (:sad: due to netlify-lambda)

### update 2020-06-28
- 2020/06 ES2020 approved https://github.com/tc39/ecma262/releases/tag/es2020

* latest ES = [ES2020](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [12](https://nodejs.org/en/about/releases/)
* latest ES supported by this node LTS = [ES2019](https://node.green/#ES2019)
* latest ES syntax supported by Webpack (= Acorn supports it + webpack bumped Acorn) = 2019
* FYI compilers/polyfills https://kangax.github.io/compat-table/es2016plus/

Babel plugins
* https://devblogs.microsoft.com/typescript/typescript-and-babel-7/

### update 2020-05-29
Switching to supporting oldest node = 12
since node 10 in maintenance mode since 2020-05-19 https://nodejs.org/en/about/releases/
* latest ES = [ES2019](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [12](https://nodejs.org/en/about/releases/)
* latest ES supported by this node LTS = [ES2019](https://node.green/#ES2019)

### update 2019-07-27
* latest ES = [ES2019](https://en.wikipedia.org/wiki/ECMAScript#Versions)
* oldest active LTS node = [10](https://nodejs.org/en/about/releases/)
* latest ES supported by this node LTS = [ES2018](https://node.green/#ES2018)



## Maintainer playbook
* when updating this file, also update `0-scripts/build-typescript.js`
* when updating node/lib, also update
  * `.nvmrc`
  * `engines` from root `package.json` = `"node":`
  * `"@types/node"`
  * `tsconfig.json`: `"lib":`
  * replace in `package.json`: `src.es202x`
  * `B-apps--support/online-adventur.es/heroku/.babelrc`
  * `B-apps--support/online-adventur.es/functions/.babelrc`
  * Netlify:
    * ensure AWS_LAMBDA_JS_RUNTIME = "nodejsXX.x" is valid in `netlify.toml`
    * in admin change AWS_LAMBDA_JS_RUNTIME = nodeXX.x or sth
  * sibling repos
    * adjust `.nvmrc` and `netlify.toml` in online-adventures.github.io




## TODO
- TODO are refreshes major or minor?? Most likely major (see @sindre)
- clarify not restricting node engine

```json
	"name": "@offirmo/deferred",
	"description": "Implementation of the deferred pattern on top of a Promise",
	"version": "4.0.1",
	"author": "Offirmo <offirmo.net@gmail.com>",
	"license": "Unlicense",

	"type": "module",  XXX No as [2022/05](update marker) this is taken too seriously by node which refuses to use commonjs
	"sideEffects": false,
	"exports": { XXX are there any tools able to read that? Even typescript doesnt (as of 4.5)
		".": {
         XXX those fields must start with ./
           XXX other fields must NOT (ex. https://github.com/vuejs/vue/blob/v2.2.2/package.json#L6)
			"import": "./dist/src.es2021/index.js",
			"require": "./dist/src.es2021.cjs/index.js"
		}
	},
	"module": "dist/src.es2021/index.js", XXX eventually, this is the most supported field https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for
	"main": "dist/src.es2021.cjs/index.js",  oldest, used for cjs XXX needed for typescript as of 4.5
	"typings": "dist/src.es2021.cjs/index.d.ts", XXX idem, needed for typescript 4.5
	"source": "src/index.ts",

	"size-limit": [
		{
			"limit": "250b",
			"path": "dist/src.es2021/index.js"
		},
		{
			"limit": "250b",
			"path": "dist/src.es2021.cjs/index.js"
		}
	],
```
