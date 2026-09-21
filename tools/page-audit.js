async page => {
  await page.waitForLoadState('networkidle')
  return page.evaluate(() => {
    const images = [...document.images]
    const ids = [...document.querySelectorAll('[id]')].map(node => node.id)
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)
    const buttons = [...document.querySelectorAll('a.button, button, .mobile-contact a')]
    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      scrollWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1Count: document.querySelectorAll('h1').length,
      missingAlt: images.filter(image => !image.hasAttribute('alt')).length,
      brokenImages: images.filter(image => image.complete && image.naturalWidth === 0).map(image => image.getAttribute('src')),
      wrappedControls: buttons.filter(button => button.scrollHeight > button.clientHeight + 2).map(button => button.textContent?.trim()),
      duplicateIds,
      externalLinksWithoutRel: [...document.querySelectorAll('a[target="_blank"]')].filter(link => !link.getAttribute('rel')?.includes('noreferrer')).length,
    }
  })
}
