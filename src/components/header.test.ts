import { Header } from './header';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
describe('Given a Header component', () => {
  describe('When it instantiates a header', () => {
    test('Then it should render a heading element in the document', () => {
      document.body.innerHTML = `<slot></slot>`;
      // eslint-disable-next-line no-new
      new Header('slot');
      const element = screen.getByRole('heading');

      expect(element).toBeInTheDocument();
    });
  });

});
