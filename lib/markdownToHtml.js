import remark from 'remark'
import html from 'remark-html'
const math = require('remark-math')
const htmlKatex = require('remark-html-katex')


export default async function markdownToHtml(markdown) {
  const result = await remark()
    
    .use(math)
    .use(htmlKatex)
    .use(html)
    .process(markdown)
  
    console.log(result.toString())
  return result.toString()
}
