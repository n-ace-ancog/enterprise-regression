import { test, expect, personalizeUtils } from '../core-fixture';

test.describe('IdsAbout visual regression tests', () => {

    test.describe('Example page tests', () => {
        test.beforeEach(async ({ page, personalize }) => {
            const errors: any[] = [];
            const url = '/about/example-index.html';

            page.on('pageerror', (error) => errors.push(error.message));
            page.on('console', (msg) => {  if (msg.type() === 'error') errors.push(msg.text()) });

            await page.goto(`.${url}?${personalizeUtils(personalize).extURL}`);

            expect(errors).toEqual([]);
        });

        test('base page validation', async ({ page, personalize }) => {
            await expect(page.locator('html')).toHaveScreenshot('befClick-' + personalizeUtils(personalize).shortName);
            await page.locator('#about-trigger').click();
            await page.locator('#ids-modal-root').waitFor();
            await expect(page.locator('html')).toHaveScreenshot('aftClick-' + personalizeUtils(personalize).shortName);
        });

        test('focus validation', async ({ page, personalize}) => {
            await page.locator('#about-trigger').click();
        });
    })
})
