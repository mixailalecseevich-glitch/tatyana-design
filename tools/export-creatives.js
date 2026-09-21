async page => {
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => { await document.fonts.ready })
  const cards = page.locator('[data-export]')
  const count = await cards.count()
  for (let index = 0; index < count; index += 1) {
    const card = cards.nth(index)
    const name = await card.getAttribute('data-export')
    await card.screenshot({
      path: `public/assets/avito/${name}.png`,
      animations: 'disabled',
    })
  }
  return { exported: count }
}
