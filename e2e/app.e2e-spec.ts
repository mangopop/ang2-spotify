import { Ang2SpotifyPage } from './app.po';

describe('ang-2-spotify App', function() {
  let page: Ang2SpotifyPage;

  beforeEach(() => {
    page = new Ang2SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
