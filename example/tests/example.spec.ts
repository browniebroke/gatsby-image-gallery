import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:9000'

test('Test page renders', async ({ page }) => {
  await page.goto(BASE_URL)

  const h1 = page.locator('h1')
  await expect(h1).toHaveText('Example for Gallery')

  const h2 = page.locator('h2')
  await expect(h2).toHaveText('Gatsby image gallery demo')
})

test('Test main functionality', async ({ page }) => {
  await page.goto(BASE_URL)

  // Click picture img >> nth=0
  await page.locator('picture img').first().click()
  // Wait for animation to complete
  await page.waitForTimeout(1000)

  let caption = page.locator('.ril__captionContent')
  await expect(caption).toHaveText('Image 0')

  // Click next 3 times
  for (let i = 0; i < 3; i++) {
    await page.locator('[aria-label="Image\\ suivante"]').click()
    // Wait for animation to complete
    await page.waitForTimeout(1000)
    caption = page.locator('.ril__captionContent')
    await expect(caption).toHaveText(`Image ${i + 1}`)
  }

  // Click previous 5 times
  for (let i = 0; i < 5; i++) {
    await page.locator('[aria-label="Image\\ précédente"]').click()
  }

  // Click "Zoomer"
  await page.locator('[aria-label="Zoomer"]').click()

  // Click "Dézoomer"
  await page.locator('[aria-label="Dézoomer"]').click()

  // Click "Fermer"
  await page.locator('[aria-label="Fermer"]').click()
})

test('Visual compare homepage', async ({ page }) => {
  await page.goto(BASE_URL)
  // Wait for lazy loading to complete
  await page.waitForTimeout(1000)
  expect(await page.screenshot()).toMatchSnapshot('homepage.png', {
    threshold: 0.5,
  })
})

test('Visual compare lightbox open', async ({ page }) => {
  await page.goto(BASE_URL)
  await page.locator('picture img').first().click()
  // Wait for animation to complete
  await page.waitForTimeout(1000)
  expect(await page.screenshot()).toMatchSnapshot('lightbox-open.png', {
    threshold: 0.5,
  })
})
