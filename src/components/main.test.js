import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Main from "./Main";


describe('main component', () => {
  test('render main component', async () => {
    render(<Main/>);
    const mainComponent = screen.getByTestId('main-component');
    expect(mainComponent).toBeInTheDocument();
   });
})