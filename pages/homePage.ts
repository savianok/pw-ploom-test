import { BasePage } from './basePage';

export class HomePage extends BasePage {
    async goToHome() {
        await this.page.goto('https://www.ploom.co.uk/en');
    }

    async handlePopups() {
        await this.page.getByRole('button', { name: 'Reject All' }).click();
        await this.page.getByText('Yes, discover more').click();
        
    }

    async clickShop() {
        await this.page.getByTestId('headerItem-0').click();
    }
}
