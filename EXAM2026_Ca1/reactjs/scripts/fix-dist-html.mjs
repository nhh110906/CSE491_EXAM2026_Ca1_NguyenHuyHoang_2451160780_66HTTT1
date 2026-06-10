import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const indexPath = resolve(process.cwd(), 'dist/index.html')
let html = readFileSync(indexPath, 'utf8')

html = html.replace(
  /<script type="module" crossorigin src="\.\/assets\/app\.js"><\/script>/,
  ''
)

if (!html.includes('./assets/app.js')) {
  html = html.replace(
    '</body>',
    '    <script src="./assets/app.js"></script>\n  </body>'
  )
}

writeFileSync(indexPath, html)
console.log('Fixed:', indexPath)
