import fs from 'node:fs/promises'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const markup = renderToString(React.createElement(App))
  const htmlPath = new URL('../dist/index.html', import.meta.url)
  const html = await fs.readFile(htmlPath, 'utf8')
  let rendered = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  const stylesheetPattern = /<link rel="stylesheet" crossorigin href="\.\/([^"]+)">/g
  for (const match of [...rendered.matchAll(stylesheetPattern)]) {
    const cssPath = new URL(`../dist/${match[1]}`, import.meta.url)
    const css = await fs.readFile(cssPath, 'utf8')
    rendered = rendered.replace(match[0], `<style>${css}</style>`)
  }
  rendered = rendered.replace(/\s*<script type="module" crossorigin src="\.\/assets\/[^"]+"><\/script>/g, '')
  const interactionScript = `<script>
  (() => {
    const menu = document.querySelector('[data-menu]')
    const open = document.querySelector('[data-menu-open]')
    const close = document.querySelector('[data-menu-close]')
    const setMenu = (visible) => {
      if (!menu) return
      menu.classList.toggle('is-open', visible)
      menu.setAttribute('aria-hidden', String(!visible))
      document.body.style.overflow = visible ? 'hidden' : ''
    }
    open?.addEventListener('click', () => setMenu(true))
    close?.addEventListener('click', () => setMenu(false))
    menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)))
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false) })

    if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('has-motion')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 })
      document.querySelectorAll('.reveal-block').forEach(element => observer.observe(element))
    }
  })()
  </script>`
  rendered = rendered.replace('</body>', `${interactionScript}</body>`)
  await fs.writeFile(htmlPath, rendered, 'utf8')
  console.log('Prerendered dist/index.html')
} finally {
  await server.close()
}
