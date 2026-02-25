import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('[data-testid="default-spinners"]')
})

test('all 40 spinners render on the page', async ({ page }) => {
  const cards = page.locator('[data-testid="default-spinners"] .spinner-card')
  await expect(cards).toHaveCount(41)
})

test('each spinner card contains visible content', async ({ page }) => {
  const cards = page.locator('[data-testid="default-spinners"] .spinner-card')
  const count = await cards.count()

  for (let i = 0; i < count; i++) {
    await expect(cards.nth(i)).toBeVisible()
  }
})

test('Circle spinner renders as SVG', async ({ page }) => {
  const circle = page.locator('[data-testid="Circle"] svg')
  await expect(circle).toBeVisible()
})

test('custom size Circle is 80px', async ({ page }) => {
  const customCircle = page.locator('[data-testid="custom-circle"] svg')
  await expect(customCircle).toBeVisible()
  const width = await customCircle.evaluate((el) => getComputedStyle(el).width)
  expect(width).toBe('80px')
})

test('custom DoubleBounce renders with custom color', async ({ page }) => {
  const card = page.locator('[data-testid="custom-doublebounce"]')
  await expect(card).toBeVisible()

  const bounceDiv = card.locator('.double-bounce1')
  const bg = await bounceDiv.evaluate((el) => getComputedStyle(el).backgroundColor)
  expect(bg).toBe('rgb(231, 76, 60)')
})

test('custom LetterCube shows custom letters', async ({ page }) => {
  const card = page.locator('[data-testid="custom-lettercube"]')
  await expect(card).toBeVisible()

  const text = await card.textContent()
  expect(text).toContain('V')
  expect(text).toContain('3')
})

test('spinners have CSS animations running', async ({ page }) => {
  const spinner = page.locator('[data-testid="Circle"] svg')
  const animationName = await spinner.evaluate(
    (el) => getComputedStyle(el).animationName
  )
  expect(animationName).not.toBe('none')
})

test('no console errors on the page', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })

  await page.goto('/')
  await page.waitForSelector('[data-testid="default-spinners"]')
  await page.waitForTimeout(1000)

  expect(errors).toEqual([])
})
