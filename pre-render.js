import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const startedAt = new Date().getTime()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const indexPath = toAbsolute('dist/index.html')
const template = fs.readFileSync(indexPath, 'utf-8')

const { render } = await import('./dist/server/entry-server.js')
const rendered = await render()

const html = template
  .replace(`<!--app-head-->`, rendered.head ?? '')
  .replace(`<!--app-html-->`, rendered.html ?? '')

fs.writeFileSync(indexPath, html)
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })

console.log('\n' + `✓ pre render in ${new Date().getTime() - startedAt}ms`)
