import { Ng2CliXperiencePage } from './app.po';

describe('ng2-cli-xperience App', function() {
  let page: Ng2CliXperiencePage;

  beforeEach(() => {
    page = new Ng2CliXperiencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
