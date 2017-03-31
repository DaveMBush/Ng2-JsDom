import { Ng2WithJsDOMPage } from './app.po';

describe('ng2-with-js-dom App', () => {
  let page: Ng2WithJsDOMPage;

  beforeEach(() => {
    page = new Ng2WithJsDOMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
