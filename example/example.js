import fs from 'node:fs'
import { remark } from 'remark'
import remarkHeadingNumbering from 'remark-heading-numbering'
import remarkToc from 'remark-toc'

remark()
  .use(remarkHeadingNumbering)
  .use(remarkToc, {
    // before
    // heading: 'toc|table[ -]of[ -]contents?|目录',
    // after
    heading: 'toc|table[ -]of[ -]contents?|目录'.split('|').map(i => `(\\d+(\\.\\d+)*( )*)?${i}`).join('|'),
  })
  .process(fs.readFileSync('example.md'))
  .then((file) => {
    console.log(file.toString())
  })
