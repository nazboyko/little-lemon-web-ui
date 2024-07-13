import { render, screen } from '@testing-library/react';
import AboutPage from '../Components/Pages/AboutPage';

test('renders learn react link', () => {
  render(<AboutPage />);
  const textElement = screen.getByText(/About Page/i);
  expect(textElement).toBeInTheDocument();
});
