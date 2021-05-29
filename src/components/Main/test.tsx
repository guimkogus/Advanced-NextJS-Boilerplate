import { render, screen } from '@testing-library/react';
import Main from './';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Boilerplate title/i })
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render background color correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
