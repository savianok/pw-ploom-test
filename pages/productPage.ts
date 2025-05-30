import { BasePage } from './basePage';

export class ProductPage extends BasePage {
    async addToCart() {
        await this.page.getByRole('button', { name: /Add to cart/i }).click();
    }

    async getCartItemCountText(locator: string) {
        return this.page.locator(locator);
    }

    async openCart() {
        await this.page.getByTestId('miniCartCheckoutButton').click(); 
    }

    getProductNameLocator(locator: string) {
        return this.page.locator(locator);
    }
}
