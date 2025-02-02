import { TestTechniqueFrontPage } from './app.po';

describe('test-technique-front App', () => {
  let page: TestTechniqueFrontPage;

  beforeEach(() => {
    page = new TestTechniqueFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
