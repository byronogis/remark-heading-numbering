# remark-heading-numbering

[![NPM version](https://img.shields.io/npm/v/remark-heading-numbering?color=a1b858&label=)](https://www.npmjs.com/package/remark-heading-numbering)

A [remark](https://github.com/remarkjs/remark) plugin that can number titles in Markdown documents

## Install

```bash
npm install remark-heading-numbering
```

## Usage

input `example.md`:

```md
# 标题一
## 标题二
### 标题三
## 标题四
# 标题五
## 标题六
### 标题七
## 标题八
```
  
```js
import fs from 'node:fs'

const remark = require('remark')
const headingNumbering = require('remark-heading-numbering')

remark()
  .use(remarkHeadingNumbering)
  .process(fs.readFileSync('example.md'))
  .then((file) => {
    console.log(file.toString())
  })
```

output:

```md
# 1 标题一
## 1.1 标题二
### 1.1.1 标题三
## 1.2 标题四
# 2 标题五
## 2.1 标题六
### 2.1.1 标题七
## 2.2 标题八
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Byron](https://github.com/byronogis)
