import { EloworldBperreaultPage } from './app.po';

describe('eloworld-bperreault App', () => {
  let page: EloworldBperreaultPage;

  beforeEach(() => {
    page = new EloworldBperreaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
