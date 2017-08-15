import { KirylAppPage } from './app.po';

describe('kiryl-app App', () => {
  let page: KirylAppPage;

  beforeEach(() => {
    page = new KirylAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
