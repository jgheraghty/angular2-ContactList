import { MeanAngular2ContactlistPage } from './app.po';

describe('mean-angular2-contactlist App', function() {
  let page: MeanAngular2ContactlistPage;

  beforeEach(() => {
    page = new MeanAngular2ContactlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
