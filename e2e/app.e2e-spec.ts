import { Angular4WebpackElectronPage } from './app.po';

describe('angular4-webpack-electron App', () => {
  let page: Angular4WebpackElectronPage;

  beforeEach(() => {
    page = new Angular4WebpackElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
