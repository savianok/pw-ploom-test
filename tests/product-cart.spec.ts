import { test } from '../fixtures/baseTest';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { ProductPage } from '../pages/productPage';
import { shopPageLocators } from '../pages/shopPageLocators';
import { productPageLocators } from '../pages/productPageLocators';

test('Add product to cart and verify', async ({ page }) => {
    const home = new HomePage(page);
    const shop = new ShopPage(page);
    const product = new ProductPage(page);

    await home.clickShop(); 

    await shop.openProductBySKU(shopPageLocators.ploomXadvanced); 

    await product.addToCart(); 
    const cartItemCountText = await product.getCartItemCountText(productPageLocators.miniCartItemCount); 
    await expect(cartItemCountText).toHaveText(productPageLocators.item_1);

    await product.openCart(); 
    await expect(page.locator(productPageLocators.checkout)).toBeVisible();
    const productNameLocator = product.getProductNameLocator(productPageLocators.productName); 
    await expect(productNameLocator).toBeVisible();

});

