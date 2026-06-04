import fs from 'fs'
import path from 'path'

const __dirname = new URL('.', import.meta.url).pathname

// GitHub Pages requires a .nojekyll file to skip Jekyll processing
fs.writeFileSync(path.join(__dirname, 'docs', '.nojekyll'), '')

console.log('Build complete. Output in docs/')
