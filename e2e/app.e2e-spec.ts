import { TodoAppFrontendPage } from './app.po';

describe('todo-app-frontend App', function() {
  let page: TodoAppFrontendPage;

  beforeEach(() => {
    page = new TodoAppFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
