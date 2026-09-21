async page => {
  const height = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < height; y += 520) {
    await page.mouse.wheel(0, 520)
    await page.waitForTimeout(130)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(800)
}
