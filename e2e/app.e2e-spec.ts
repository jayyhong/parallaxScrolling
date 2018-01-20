import { ParallaxPracticePage } from './app.po';

describe('parallax-practice App', () => {
  let page: ParallaxPracticePage;

  beforeEach(() => {
    page = new ParallaxPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
