import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const startedAt = Date.now()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const indexPath = toAbsolute('dist/index.html')
const template = await fs.readFile(indexPath, 'utf-8')

const { render } = await import('./dist/server/entry-server.js')
const rendered = render()

const html = template
  .replace(`<!--app-head-->`, rendered.head ?? '')
  .replace(`<!--app-html-->`, rendered.html ?? '')

await Promise.all([
  fs.writeFile(indexPath, html),
  fs.rm(toAbsolute('dist/server'), { recursive: true, force: true }),
])

console.log('\n' + `✓ pre render in ${Date.now() - startedAt}ms`)
