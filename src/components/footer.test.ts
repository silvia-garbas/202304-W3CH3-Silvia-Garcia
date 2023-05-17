import { Footer } from './footer';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
describe('Given a Footer component', () => {
  describe('When it instantiates a footer', () => {
    test('Then it should render an address element in the document', () => {
      document.body.innerHTML = `<slot></slot>`;
      new Footer('slot');
      const element = screen.getByText('ISDI-Coders');

      expect(element).toBeInTheDocument();
    });
  });

  // Describe("When it tries to instantiate an element in a selector that doesn't exist", () => {
  //   test('Then it should throw an error message', () => {
  //     document.body.innerHTML = `<slot></slot>`;
  //     new Footer('span');
  //     const element = screen.getByRole('heading');

  //     expect(element).toThrowError('Invalid Selector');
  //   });
  // });
});
