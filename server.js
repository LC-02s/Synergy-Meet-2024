import fs from 'node:fs/promises'
import express from 'express'

// Constants
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Create http server
const app = express()

// Add Vite or respective production middlewares
const { createServer } = await import('vite')
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
})

const baseTemplate = await fs.readFile('./index.html', 'utf-8')
const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')

app.use(vite.middlewares)

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')
    const template = await vite.transformIndexHtml(url, baseTemplate)

    const rendered = render(url)
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
