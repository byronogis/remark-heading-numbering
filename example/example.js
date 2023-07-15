import fs from 'node:fs'
import { remark } from 'remark'
import remarkToc from 'remark-toc'
import remarkHeadingNumbering from '../src/index'

remark()
  .use(remarkHeadingNumbering, { separator: '_' })
  .use(remarkToc, {
    // before
    // heading: 'toc|table[ -]of[ -]contents?|目录',
    // after
    heading: 'toc|table[ -]of[ -]contents?|目录'.split('|').map(i => `(\\d+(\\.\\d+)*( )*)?${i}`).join('|'),
  })
  .process(fs.readFileSync('example.md'))
  .then((file) => {
    console.log(file)
    fs.writeFileSync('example.out.md', file.value)
  })
