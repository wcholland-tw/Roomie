import { RoomiePage } from './app.po';

describe('roomie App', function() {
  let page: RoomiePage;

  beforeEach(() => {
    page = new RoomiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
