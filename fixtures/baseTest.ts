import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';

const test = base.extend({
    page: async ({ page }, use) => {
        const home = new HomePage(page);
        await home.goToHome();
        await home.handlePopups();
        await use(page); 
    },
});

export { test };
