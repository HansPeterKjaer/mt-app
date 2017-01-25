import { NgMtAppPage } from './app.po';

describe('ng-mt-app App', function() {
  let page: NgMtAppPage;

  beforeEach(() => {
    page = new NgMtAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
