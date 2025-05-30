import { BasePage } from './basePage';

export class ShopPage extends BasePage {
    async openProductBySKU(sku: string) {
        const productSelector = `[data-sku="${sku}"] a`;

        await this.page.mouse.wheel(0, 500); 
        await this.page.waitForTimeout(1000); 
        console.log(`⏳ Waiting for product with SKU: ${sku}`); 
        await this.page.locator(productSelector).first().click();
    }
}
