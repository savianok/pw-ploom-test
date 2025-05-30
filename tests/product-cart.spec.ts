import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { ProductPage } from '../pages/productPage';
import { shopPageLocators } from '../pages/shopPageLocators';
import { productPageLocators } from '../pages/productPageLocators';

test('Add product to cart and verify', async ({ page }) => {
    const home = new HomePage(page);
    const shop = new ShopPage(page);
    const product = new ProductPage(page);

    
});

